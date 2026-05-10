import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { IconNode, IconsManifest } from "@mal-icon/core";
import type { IconSource } from "../../../icons-data/sources.config";
import { contentHash } from "./dedup.ts";
import type { RawIcon } from "./fetch.ts";
import { toComponentName } from "./naming.ts";
import { optimize } from "./optimize.ts";
import { parseSvg } from "./svg.ts";

/** Absolute path to the React package's generated-icons root. */
const ICONS_ROOT = join(process.cwd(), "packages", "react", "src", "icons");
/** Absolute path to the Vue package's generated-icons root. */
const VUE_ICONS_ROOT = join(process.cwd(), "packages", "vue", "src", "icons");
/** Absolute path to the Svelte package's generated-icons root. */
const SVELTE_ICONS_ROOT = join(process.cwd(), "packages", "svelte", "src", "icons");

/** A generated icon ready to be written to disk. */
interface GeneratedIcon {
  componentName: string;
  rawName: string;
  viewBox: string;
  defaultAttr: Record<string, string | number>;
  nodes: IconNode[];
  hash: string;
}

function camelToKebab(name: string): string {
  return name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}

/** Re-key an attribute map to kebab-case, as required by Vue/Svelte templates. */
function kebabAttrs<T>(attr: Record<string, T>): Record<string, T> {
  const out: Record<string, T> = {};
  for (const [k, v] of Object.entries(attr)) out[camelToKebab(k)] = v;
  return out;
}

function serializeNodes(nodes: IconNode[]): string {
  return `[${nodes.map((n) => `["${n.tag}",${JSON.stringify(n.attr)}]`).join(",")}]`;
}

/** Serialize nodes with kebab-cased attribute keys (Vue/Svelte). */
function serializeNodesKebab(nodes: IconNode[]): string {
  return `[${nodes.map((n) => `["${n.tag}",${JSON.stringify(kebabAttrs(n.attr))}]`).join(",")}]`;
}

function iconFileContents(icon: GeneratedIcon): string {
  const nodesLiteral = serializeNodes(icon.nodes);
  const hasDefaults = Object.keys(icon.defaultAttr).length > 0;
  const defaultsArg = hasDefaults ? `, ${JSON.stringify(icon.defaultAttr)}` : "";
  return `import { createIcon } from "../../create-icon.tsx";\n\nexport const ${icon.componentName} = createIcon("${icon.viewBox}", ${nodesLiteral}${defaultsArg});\n`;
}

/** Vue per-icon module using the Vue `createIcon` factory. */
function vueIconFileContents(icon: GeneratedIcon): string {
  const nodesLiteral = serializeNodesKebab(icon.nodes);
  const hasDefaults = Object.keys(icon.defaultAttr).length > 0;
  const defaultsArg = hasDefaults ? `, ${JSON.stringify(kebabAttrs(icon.defaultAttr))}` : "";
  return `import { createIcon } from "../../create-icon.ts";\n\nexport const ${icon.componentName} = createIcon("${icon.viewBox}", ${nodesLiteral}${defaultsArg});\n`;
}

/** Svelte per-icon component wrapping the shared `IconBase.svelte`. */
function svelteIconFileContents(icon: GeneratedIcon): string {
  const nodesLiteral = serializeNodesKebab(icon.nodes);
  const hasDefaults = Object.keys(icon.defaultAttr).length > 0;
  const defaultLine = hasDefaults
    ? `  const defaultAttr = ${JSON.stringify(kebabAttrs(icon.defaultAttr))};\n`
    : "";
  const defaultBind = hasDefaults ? " {defaultAttr}" : "";
  return `<script lang="ts">
  import type { NodeTuple } from "@mal-icon/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = ${nodesLiteral};
${defaultLine}  let props = $props();
</script>

<IconBase viewBox="${icon.viewBox}" {nodes}${defaultBind} {...props} />
`;
}

function nodeToSvgString(node: IconNode): string {
  const attrs = Object.entries(node.attr)
    .map(([k, v]) => `${camelToKebab(k)}="${v}"`)
    .join(" ");
  return `<${node.tag}${attrs ? ` ${attrs}` : ""}/>`;
}

function buildSprite(source: IconSource, icons: GeneratedIcon[]): string {
  const symbols = icons
    .map((icon) => {
      const id = `${source.id}-${icon.rawName}`;
      const children = icon.nodes.map(nodeToSvgString).join("");
      return `<symbol id="${id}" viewBox="${icon.viewBox}">${children}</symbol>`;
    })
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbols}</svg>\n`;
}

/**
 * Run the generate + emit stages for a single set: parse, optimize, hash,
 * then write per-icon files, a sorted barrel, a sprite sheet, and update the
 * shared manifest. Output is deterministic for identical input.
 */
export async function generateSet(
  source: IconSource,
  raw: RawIcon[],
  limit?: number,
): Promise<{ count: number }> {
  const slice = typeof limit === "number" ? raw.slice(0, limit) : raw;

  const icons: GeneratedIcon[] = slice.map((item) => {
    const optimized = optimize(parseSvg(item.svg), source);
    return {
      componentName: toComponentName(source.prefix, item.name),
      rawName: item.name,
      viewBox: optimized.viewBox,
      defaultAttr: optimized.defaultAttr,
      nodes: optimized.nodes,
      hash: contentHash(optimized),
    };
  });
  icons.sort((a, b) => a.componentName.localeCompare(b.componentName));

  const setDir = join(ICONS_ROOT, source.id);
  await rm(setDir, { recursive: true, force: true });
  await mkdir(setDir, { recursive: true });

  for (const icon of icons) {
    await writeFile(join(setDir, `${icon.componentName}.tsx`), iconFileContents(icon));
  }

  const namesConst = `${source.id}IconNames`;
  const namesType = `${source.id.charAt(0).toUpperCase()}${source.id.slice(1)}IconName`;
  const barrel = `${icons
    .map((icon) => `export { ${icon.componentName} } from "./${icon.componentName}.tsx";`)
    .join("\n")}\nexport { ${namesConst}, type ${namesType} } from "./names.ts";\n`;
  await writeFile(join(setDir, "index.ts"), barrel);

  const namesFile = `/** Type-safe list of every icon name in the "${source.id}" set. */
export const ${namesConst} = [
${icons.map((icon) => `  "${icon.componentName}",`).join("\n")}
] as const;

/** Union of valid "${source.id}" icon names; invalid names are TS errors. */
export type ${namesType} = (typeof ${namesConst})[number];
`;
  await writeFile(join(setDir, "names.ts"), namesFile);

  await writeFile(join(setDir, "sprite.svg"), buildSprite(source, icons));

  await emitVueSet(source, icons);
  await emitSvelteSet(source, icons);

  await updateManifest(source, icons.length);

  return { count: icons.length };
}

/** Emit the Vue per-icon modules + barrel for a set. */
async function emitVueSet(source: IconSource, icons: GeneratedIcon[]): Promise<void> {
  const setDir = join(VUE_ICONS_ROOT, source.id);
  await rm(setDir, { recursive: true, force: true });
  await mkdir(setDir, { recursive: true });

  for (const icon of icons) {
    await writeFile(join(setDir, `${icon.componentName}.ts`), vueIconFileContents(icon));
  }

  const barrel = `${icons
    .map((icon) => `export { ${icon.componentName} } from "./${icon.componentName}.ts";`)
    .join("\n")}\n`;
  await writeFile(join(setDir, "index.ts"), barrel);
}

/** Emit the Svelte per-icon components + barrel for a set. */
async function emitSvelteSet(source: IconSource, icons: GeneratedIcon[]): Promise<void> {
  const setDir = join(SVELTE_ICONS_ROOT, source.id);
  await rm(setDir, { recursive: true, force: true });
  await mkdir(setDir, { recursive: true });

  for (const icon of icons) {
    await writeFile(join(setDir, `${icon.componentName}.svelte`), svelteIconFileContents(icon));
  }

  const barrel = `${icons
    .map(
      (icon) =>
        `export { default as ${icon.componentName} } from "./${icon.componentName}.svelte";`,
    )
    .join("\n")}\n`;
  await writeFile(join(setDir, "index.ts"), barrel);
}

async function updateManifest(source: IconSource, count: number): Promise<void> {
  const manifestPath = join(ICONS_ROOT, "manifest.json");
  let manifest: IconsManifest = { sets: [] };
  if (existsSync(manifestPath)) {
    manifest = JSON.parse(await readFile(manifestPath, "utf8")) as IconsManifest;
  }
  const entry = { id: source.id, name: source.name, license: source.license, count };
  const others = manifest.sets.filter((s) => s.id !== source.id);
  manifest.sets = [...others, entry].sort((a, b) => a.id.localeCompare(b.id));
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}
