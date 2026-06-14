import type { IconNode } from "@mal-icons/core";

/** Result of parsing a raw SVG string. */
export interface ParsedSvg {
  viewBox: string;
  /** Root-level presentation attributes (fill, stroke, stroke-width, …). */
  rootAttr: Record<string, string>;
  /** Shape children. */
  nodes: IconNode[];
}

/** Options controlling how the parser handles `<g>` groups. */
export interface ParseSvgOptions {
  /**
   * When true, presentational `<g>` wrappers are *flattened*: a group's
   * inheritable paint attributes (e.g. `fill`) cascade onto its descendant
   * shapes and the group element itself is dropped. Multi-color sets (e.g.
   * Flat Color Icons) group same-colored details under `<g fill="…">`, so
   * flattening keeps the flat runtime model while preserving per-shape colors.
   *
   * When false (the default), the legacy behavior is kept: `<g>` is treated
   * as a plain shape node and no attributes cascade. This preserves
   * byte-identical output for the existing stroke/fill sets.
   */
  flattenGroups?: boolean;
}

/** Leaf shape elements emitted as flat nodes. */
const LEAF_SHAPE_TAGS = new Set([
  "path",
  "circle",
  "rect",
  "line",
  "polyline",
  "polygon",
  "ellipse",
]);

/** Shape tags recognized in legacy (non-flattening) mode, including `<g>`. */
const SHAPE_TAGS = new Set([...LEAF_SHAPE_TAGS, "g"]);

/**
 * SVG paint/presentation attributes that legitimately cascade from a `<g>`
 * onto its child shapes. Only these inherit when flattening — structural or
 * metadata attributes (`id`, `class`, `data-name`, namespaces, …) do not, so
 * they never leak onto the flattened children.
 */
const INHERITABLE_ATTRS = new Set([
  "fill",
  "fill-rule",
  "fill-opacity",
  "stroke",
  "stroke-width",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-dasharray",
  "stroke-opacity",
  "opacity",
  "color",
]);

/** Keep only the inheritable paint attributes from a `<g>`'s attribute map. */
function inheritableAttrs(attr: Record<string, string>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(attr)) {
    if (INHERITABLE_ATTRS.has(k)) out[k] = v;
  }
  return out;
}

/** Merge a group's inherited paint attributes onto a child's own (child wins). */
function withInherited(
  inherited: Record<string, string>,
  own: Record<string, string>,
): Record<string, string> {
  return { ...inherited, ...own };
}

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
 * supported icon sets (a single `<svg>` root with flat shape children,
 * optionally wrapped in presentational `<g>` groups).
 *
 * It deliberately ignores scripts, styles, defs, and gradients, which is
 * sufficient for line/fill/color icon sets and avoids pulling in a full
 * XML/DOM dependency. See {@link ParseSvgOptions.flattenGroups} for how
 * nested groups are handled.
 */
export function parseSvg(svg: string, options: ParseSvgOptions = {}): ParsedSvg {
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

  const nodes = options.flattenGroups ? parseFlattened(inner) : parseFlat(inner);

  return { viewBox, rootAttr, nodes };
}

/**
 * Legacy parse: every shape tag (including `<g>`) becomes a flat node with no
 * attribute inheritance. Output is byte-identical to earlier releases for the
 * existing stroke/fill sets.
 */
function parseFlat(inner: string): IconNode[] {
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
  return nodes;
}

/**
 * Flattening parse: `<g>` wrappers are dropped and their inheritable paint
 * attributes cascade onto descendant leaf shapes (multi-color `color` sets).
 */
function parseFlattened(inner: string): IconNode[] {
  const nodes: IconNode[] = [];
  // Stack of inherited paint attributes contributed by currently-open `<g>`.
  const groupStack: Record<string, string>[] = [];
  // Match an opening/self-closing tag or a closing tag, in document order.
  const tagRe = /<(\/)?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*?)(\/)?>/g;
  let t: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: standard regex loop
  while ((t = tagRe.exec(inner)) !== null) {
    const isClosing = t[1] === "/";
    const tag = (t[2] ?? "").toLowerCase();
    const selfClosed = t[4] === "/";

    if (tag === "g") {
      if (isClosing) {
        groupStack.pop();
      } else if (!selfClosed) {
        const parent = groupStack[groupStack.length - 1] ?? {};
        groupStack.push(withInherited(parent, inheritableAttrs(parseAttrs(t[3] ?? ""))));
      }
      continue;
    }

    if (isClosing || !LEAF_SHAPE_TAGS.has(tag) || t[3] === undefined) continue;
    const inherited = groupStack[groupStack.length - 1] ?? {};
    nodes.push({ tag, attr: withInherited(inherited, parseAttrs(t[3])), child: [] });
  }
  return nodes;
}
