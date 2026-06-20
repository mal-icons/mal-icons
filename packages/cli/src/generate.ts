import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { IconNode, IconsManifest } from "@mal-icons/core";
import type { IconSource } from "../../../icons-data/sources.config";
import { contentHash } from "./dedup.ts";
import type { RawIcon } from "./fetch.ts";
import { toComponentName } from "./naming.ts";
import { optimize } from "./optimize.ts";
import { type SearchEntry, type SearchIndex, tokenize } from "./search.ts";
import { parseSvg } from "./svg.ts";

/** Absolute path to the React package's generated-icons root. */
const ICONS_ROOT = join(process.cwd(), "packages", "react", "src", "icons");
/** Absolute path to the Vue package's generated-icons root. */
const VUE_ICONS_ROOT = join(process.cwd(), "packages", "vue", "src", "icons");
/** Absolute path to the Svelte package's generated-icons root. */
const SVELTE_ICONS_ROOT = join(process.cwd(), "packages", "svelte", "src", "icons");
/** Absolute path to the React Native package's generated-icons root. */
const REACT_NATIVE_ICONS_ROOT = join(process.cwd(), "packages", "react-native", "src", "icons");
/** Absolute path to the Preact package's generated-icons root. */
const PREACT_ICONS_ROOT = join(process.cwd(), "packages", "preact", "src", "icons");
/** Absolute path to the Solid package's generated-icons root. */
const SOLID_ICONS_ROOT = join(process.cwd(), "packages", "solid", "src", "icons");
/** Absolute path to the Angular package's generated-icons root. */
const ANGULAR_ICONS_ROOT = join(process.cwd(), "packages", "angular", "src", "icons");
/** Absolute path to the Astro package's generated-icons root. */
const ASTRO_ICONS_ROOT = join(process.cwd(), "packages", "astro", "src", "icons");
/** Absolute path to the Web (CDN) package's generated-icons root. */
const WEB_ICONS_ROOT = join(process.cwd(), "packages", "web", "src", "icons");

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
  return `import { createIcon } from "../../create-icon.tsx";\n\nconst ${icon.componentName} = createIcon("${icon.viewBox}", ${nodesLiteral}${defaultsArg});\n\nexport default ${icon.componentName};\n`;
}

/** Vue per-icon module using the Vue `createIcon` factory. */
function vueIconFileContents(icon: GeneratedIcon): string {
  const nodesLiteral = serializeNodesKebab(icon.nodes);
  const hasDefaults = Object.keys(icon.defaultAttr).length > 0;
  const defaultsArg = hasDefaults ? `, ${JSON.stringify(kebabAttrs(icon.defaultAttr))}` : "";
  return `import { createIcon } from "../../create-icon.ts";\n\nconst ${icon.componentName} = createIcon("${icon.viewBox}", ${nodesLiteral}${defaultsArg});\n\nexport default ${icon.componentName};\n`;
}

/**
 * Per-icon module for the JS-factory adapters (Preact, Solid) that share the
 * same `createIcon(viewBox, nodes, defaultAttr)` shape as Vue, using
 * kebab-cased attributes for native SVG rendering.
 */
function factoryIconFileContents(icon: GeneratedIcon): string {
  return vueIconFileContents(icon);
}

/** Angular standalone component wrapping the shared `IconBaseComponent`. */
function angularIconFileContents(source: IconSource, icon: GeneratedIcon): string {
  const nodesLiteral = serializeNodesKebab(icon.nodes);
  const hasDefaults = Object.keys(icon.defaultAttr).length > 0;
  const defaultLine = hasDefaults
    ? `  readonly defaultAttr = ${JSON.stringify(kebabAttrs(icon.defaultAttr))};\n`
    : "";
  const selector = `mal-${source.id}-${icon.rawName}`;
  return `import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "${selector}",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>\`,
})
class ${icon.componentName} {
  readonly viewBox = "${icon.viewBox}";
  readonly nodes: NodeTuple[] = ${nodesLiteral};
${defaultLine}  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default ${icon.componentName};
`;
}

/** Astro per-icon component wrapping the shared `IconBase.astro`. */
function astroIconFileContents(icon: GeneratedIcon): string {
  const nodesLiteral = serializeNodesKebab(icon.nodes);
  const hasDefaults = Object.keys(icon.defaultAttr).length > 0;
  const defaultLine = hasDefaults
    ? `const defaultAttr = ${JSON.stringify(kebabAttrs(icon.defaultAttr))};\n`
    : "";
  const defaultBind = hasDefaults ? " defaultAttr={defaultAttr}" : "";
  return `---
import type { NodeTuple } from "@mal-icons/core";
import IconBase from "../../IconBase.astro";

const nodes: NodeTuple[] = ${nodesLiteral};
${defaultLine}---

<IconBase viewBox="${icon.viewBox}" nodes={nodes}${defaultBind} {...Astro.props} />
`;
}

/** Serializable {@link IconData} payload for the Web (CDN) package. */
function webIconData(icon: GeneratedIcon): string {
  const nodes = icon.nodes.map((n) => [n.tag, kebabAttrs(n.attr)]);
  const data: Record<string, unknown> = { viewBox: icon.viewBox, nodes };
  if (Object.keys(icon.defaultAttr).length > 0) data.defaultAttr = kebabAttrs(icon.defaultAttr);
  return `${JSON.stringify(data)}\n`;
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
  import type { NodeTuple } from "@mal-icons/core";
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
    const optimized = optimize(
      parseSvg(item.svg, { flattenGroups: source.style === "color" }),
      source,
    );
    const name =
      source.stripPrefix &&
      item.name.startsWith(source.stripPrefix) &&
      item.name.length > source.stripPrefix.length
        ? item.name.slice(source.stripPrefix.length)
        : item.name;
    return {
      componentName: toComponentName(source.prefix, name),
      rawName: name,
      viewBox: optimized.viewBox,
      defaultAttr: optimized.defaultAttr,
      nodes: optimized.nodes,
      hash: contentHash(optimized),
    };
  });
  icons.sort((a, b) => a.componentName.localeCompare(b.componentName));

  // Some sets contain raw names that collapse to the same component name when
  // compared case-insensitively (e.g. Material's "add_chart" → MdAddChart and
  // "addchart" → MdAddchart). These are distinct glyphs, but identifiers that
  // differ only in case clash on case-insensitive filesystems and are rejected
  // by TypeScript. Deterministically suffix later collisions so every emitted
  // module name is unique regardless of filesystem casing.
  const seenNames = new Set<string>();
  for (const icon of icons) {
    let unique = icon.componentName;
    let suffix = 2;
    while (seenNames.has(unique.toLowerCase())) {
      unique = `${icon.componentName}${suffix}`;
      suffix++;
    }
    icon.componentName = unique;
    seenNames.add(unique.toLowerCase());
  }
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
    .map(
      (icon) => `export { default as ${icon.componentName} } from "./${icon.componentName}.tsx";`,
    )
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
  await emitReactNativeSet(source, icons);
  await emitPreactSet(source, icons);
  await emitSolidSet(source, icons);
  await emitAngularSet(source, icons);
  await emitAstroSet(source, icons);
  await emitWebSet(source, icons);

  await updateManifest(source, icons.length);
  await updateSearchIndex(source, icons);

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
    .map((icon) => `export { default as ${icon.componentName} } from "./${icon.componentName}.ts";`)
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

/** Emit the React Native per-icon modules + barrel + names for a set. */
async function emitReactNativeSet(source: IconSource, icons: GeneratedIcon[]): Promise<void> {
  const setDir = join(REACT_NATIVE_ICONS_ROOT, source.id);
  await rm(setDir, { recursive: true, force: true });
  await mkdir(setDir, { recursive: true });

  for (const icon of icons) {
    await writeFile(join(setDir, `${icon.componentName}.tsx`), iconFileContents(icon));
  }

  const namesConst = `${source.id}IconNames`;
  const namesType = `${source.id.charAt(0).toUpperCase()}${source.id.slice(1)}IconName`;
  const barrel = `${icons
    .map(
      (icon) => `export { default as ${icon.componentName} } from "./${icon.componentName}.tsx";`,
    )
    .join("\n")}\nexport { ${namesConst}, type ${namesType} } from "./names.ts";\n`;
  await writeFile(join(setDir, "index.ts"), barrel);
  await writeFile(join(setDir, "names.ts"), namesFileContents(source, icons));
}

/** Build the shared, type-safe `names.ts` contents for a set. */
function namesFileContents(source: IconSource, icons: GeneratedIcon[]): string {
  const namesConst = `${source.id}IconNames`;
  const namesType = `${source.id.charAt(0).toUpperCase()}${source.id.slice(1)}IconName`;
  return `/** Type-safe list of every icon name in the "${source.id}" set. */
export const ${namesConst} = [
${icons.map((icon) => `  "${icon.componentName}",`).join("\n")}
] as const;

/** Union of valid "${source.id}" icon names; invalid names are TS errors. */
export type ${namesType} = (typeof ${namesConst})[number];
`;
}

/** Emit the Preact per-icon modules + barrel for a set. */
async function emitPreactSet(source: IconSource, icons: GeneratedIcon[]): Promise<void> {
  const setDir = join(PREACT_ICONS_ROOT, source.id);
  await rm(setDir, { recursive: true, force: true });
  await mkdir(setDir, { recursive: true });

  for (const icon of icons) {
    await writeFile(join(setDir, `${icon.componentName}.ts`), factoryIconFileContents(icon));
  }

  const namesConst = `${source.id}IconNames`;
  const namesType = `${source.id.charAt(0).toUpperCase()}${source.id.slice(1)}IconName`;
  const barrel = `${icons
    .map((icon) => `export { default as ${icon.componentName} } from "./${icon.componentName}.ts";`)
    .join("\n")}\nexport { ${namesConst}, type ${namesType} } from "./names.ts";\n`;
  await writeFile(join(setDir, "index.ts"), barrel);
  await writeFile(join(setDir, "names.ts"), namesFileContents(source, icons));
}

/** Emit the Solid per-icon modules + barrel for a set. */
async function emitSolidSet(source: IconSource, icons: GeneratedIcon[]): Promise<void> {
  const setDir = join(SOLID_ICONS_ROOT, source.id);
  await rm(setDir, { recursive: true, force: true });
  await mkdir(setDir, { recursive: true });

  for (const icon of icons) {
    await writeFile(join(setDir, `${icon.componentName}.ts`), factoryIconFileContents(icon));
  }

  const namesConst = `${source.id}IconNames`;
  const namesType = `${source.id.charAt(0).toUpperCase()}${source.id.slice(1)}IconName`;
  // Use a real local binding (`const X = _X`) rather than a pure re-export
  // (`export { X } from "./names.ts"`).  Bun's `splitting:true` bundler emits
  // pure re-export barrels as "facade" modules that reference the exported
  // symbol without defining it; Node ESM then throws
  // "Export 'X' is not defined in module".  A local `const` assignment forces
  // Bun to inline or properly chunk the definition.
  const barrel = `${icons
    .map((icon) => `export { default as ${icon.componentName} } from "./${icon.componentName}.ts";`)
    .join("\n")}\nimport { ${namesConst} as _${namesConst} } from "./names.ts";\nexport type { ${namesType} } from "./names.ts";\nexport const ${namesConst} = _${namesConst};\n`;
  await writeFile(join(setDir, "index.ts"), barrel);
  await writeFile(join(setDir, "names.ts"), namesFileContents(source, icons));
}

/** Emit the Angular per-icon standalone components + barrel for a set. */
async function emitAngularSet(source: IconSource, icons: GeneratedIcon[]): Promise<void> {
  const setDir = join(ANGULAR_ICONS_ROOT, source.id);
  await rm(setDir, { recursive: true, force: true });
  await mkdir(setDir, { recursive: true });

  for (const icon of icons) {
    await writeFile(
      join(setDir, `${icon.componentName}.ts`),
      angularIconFileContents(source, icon),
    );
  }

  const namesConst = `${source.id}IconNames`;
  const namesType = `${source.id.charAt(0).toUpperCase()}${source.id.slice(1)}IconName`;
  const barrel = `${icons
    .map((icon) => `export { default as ${icon.componentName} } from "./${icon.componentName}.ts";`)
    .join("\n")}\nexport { ${namesConst}, type ${namesType} } from "./names.ts";\n`;
  await writeFile(join(setDir, "index.ts"), barrel);
  await writeFile(join(setDir, "names.ts"), namesFileContents(source, icons));
}

/** Emit the Astro per-icon components for a set (no barrel; Astro imports files directly). */
async function emitAstroSet(source: IconSource, icons: GeneratedIcon[]): Promise<void> {
  const setDir = join(ASTRO_ICONS_ROOT, source.id);
  await rm(setDir, { recursive: true, force: true });
  await mkdir(setDir, { recursive: true });

  for (const icon of icons) {
    await writeFile(join(setDir, `${icon.componentName}.astro`), astroIconFileContents(icon));
  }
  await writeFile(join(setDir, "names.ts"), namesFileContents(source, icons));
}

/** Emit the Web (CDN) per-icon JSON data + typed registry barrel for a set. */
async function emitWebSet(source: IconSource, icons: GeneratedIcon[]): Promise<void> {
  const setDir = join(WEB_ICONS_ROOT, source.id);
  await rm(setDir, { recursive: true, force: true });
  await mkdir(setDir, { recursive: true });

  for (const icon of icons) {
    await writeFile(join(setDir, `${icon.componentName}.json`), webIconData(icon));
  }

  const namesConst = `${source.id}IconNames`;
  const namesType = `${source.id.charAt(0).toUpperCase()}${source.id.slice(1)}IconName`;
  const imports = icons
    .map((icon) => `import ${icon.componentName} from "./${icon.componentName}.json";`)
    .join("\n");
  const record = icons.map((icon) => `  ${icon.componentName},`).join("\n");
  const barrel = `import type { IconData } from "@mal-icons/core";
${imports}

/** Every "${source.id}" icon as serializable data, keyed by component name. */
export const ${source.id}Icons = {
${record}
} as unknown as Record<string, IconData>;

export { ${namesConst}, type ${namesType} } from "./names.ts";
`;
  await writeFile(join(setDir, "index.ts"), barrel);
  await writeFile(join(setDir, "names.ts"), namesFileContents(source, icons));
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

/** Merge a set's icons into the shared, deterministic search index. */
async function updateSearchIndex(source: IconSource, icons: GeneratedIcon[]): Promise<void> {
  const indexPath = join(ICONS_ROOT, "search-index.json");
  let index: SearchIndex = { entries: [] };
  if (existsSync(indexPath)) {
    index = JSON.parse(await readFile(indexPath, "utf8")) as SearchIndex;
  }
  const others = index.entries.filter((e) => e.set !== source.id);
  const setEntries: SearchEntry[] = icons.map((icon) => ({
    name: icon.componentName,
    set: source.id,
    terms: [...new Set([...tokenize(icon.componentName), ...tokenize(icon.rawName)])],
  }));
  index.entries = [...others, ...setEntries].sort(
    (a, b) => a.set.localeCompare(b.set) || a.name.localeCompare(b.name),
  );
  await writeFile(indexPath, `${JSON.stringify(index, null, 2)}\n`);
}
