import type { IconNode } from "@mal-icon/core";

/** Result of parsing a raw SVG string. */
export interface ParsedSvg {
  viewBox: string;
  /** Root-level presentation attributes (fill, stroke, stroke-width, …). */
  rootAttr: Record<string, string>;
  /** Shape children. */
  nodes: IconNode[];
}

const SHAPE_TAGS = new Set([
  "path",
  "circle",
  "rect",
  "line",
  "polyline",
  "polygon",
  "ellipse",
  "g",
]);

/** Parse the attributes out of a single opening tag body (without `< >`). */
function parseAttrs(tagBody: string): Record<string, string> {
  const attr: Record<string, string> = {};
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*"([^"]*)"/g;
  let m: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: standard regex loop
  while ((m = re.exec(tagBody)) !== null) {
    const key = m[1];
    const value = m[2];
    if (key !== undefined && value !== undefined) attr[key] = value;
  }
  return attr;
}

/**
 * Minimal, dependency-free SVG parser covering the subset emitted by the
 * supported icon sets (a single `<svg>` root with flat shape children).
 *
 * It deliberately ignores scripts, styles, and nested groups beyond one
 * level, which is sufficient for line/fill icon sets and avoids pulling in
 * a full XML/DOM dependency.
 */
export function parseSvg(svg: string): ParsedSvg {
  const svgOpenMatch = svg.match(/<svg\b([^>]*)>/i);
  if (!svgOpenMatch || svgOpenMatch[1] === undefined) {
    throw new Error("No <svg> root element found");
  }
  const rootAttr = parseAttrs(svgOpenMatch[1]);

  let viewBox = rootAttr.viewBox ?? "";
  if (!viewBox && rootAttr.width && rootAttr.height) {
    viewBox = `0 0 ${rootAttr.width} ${rootAttr.height}`;
  }
  if (!viewBox) viewBox = "0 0 24 24";

  const inner = svg.slice(
    (svgOpenMatch.index ?? 0) + svgOpenMatch[0].length,
    svg.lastIndexOf("</svg>") === -1 ? undefined : svg.lastIndexOf("</svg>"),
  );

  const nodes: IconNode[] = [];
  const tagRe = /<([a-zA-Z][a-zA-Z0-9]*)\b([^>]*?)\/?>/g;
  let t: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: standard regex loop
  while ((t = tagRe.exec(inner)) !== null) {
    const tag = (t[1] ?? "").toLowerCase();
    if (!SHAPE_TAGS.has(tag)) continue;
    if (t[2] === undefined) continue;
    nodes.push({ tag, attr: parseAttrs(t[2]), child: [] });
  }

  return { viewBox, rootAttr, nodes };
}
