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

function serializeNodes(nodes: IconNode[]): string {
  return `[${nodes.map((n) => `["${n.tag}",${JSON.stringify(n.attr)}]`).join(",")}]`;
}

function iconFileContents(icon: GeneratedIcon): string {
  const nodesLiteral = serializeNodes(icon.nodes);
  const hasDefaults = Object.keys(icon.defaultAttr).length > 0;
  const defaultsArg = hasDefaults ? `, ${JSON.stringify(icon.defaultAttr)}` : "";
  return `import { createIcon } from "../../create-icon.tsx";\n\nexport const ${icon.componentName} = createIcon("${icon.viewBox}", ${nodesLiteral}${defaultsArg});\n`;
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

  const barrel = `${icons
    .map((icon) => `export { ${icon.componentName} } from "./${icon.componentName}.tsx";`)
    .join("\n")}\n`;
  await writeFile(join(setDir, "index.ts"), barrel);

  await writeFile(join(setDir, "sprite.svg"), buildSprite(source, icons));

  await updateManifest(source, icons.length);

  return { count: icons.length };
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
