import type { IconNode } from "@mal-icons/core";

/** Result of parsing a raw SVG string. */
export interface ParsedSvg {
  viewBox: string;
  /** Root-level presentation attributes (fill, stroke, stroke-width, …). */
  rootAttr: Record<string, string>;
  /** Shape children. */
  nodes: IconNode[];
}

/** Leaf shape elements emitted as flat nodes. */
const SHAPE_TAGS = new Set(["path", "circle", "rect", "line", "polyline", "polygon", "ellipse"]);

/**
 * Group attributes that must NOT cascade onto child shapes when a `<g>`
 * wrapper is flattened. Structural keys (`id`, `class`, namespaces) are
 * per-element, not inheritable presentation; everything else (e.g. `fill`
 * on a `<g fill="#fff">` grouping white details) is pushed down so the flat
 * node carries the color it visually rendered with inside the group.
 */
const NON_INHERITED_ATTRS = new Set(["id", "class", "xmlns"]);

/** Merge a `<g>`'s inheritable attributes onto a child's own attributes (child wins). */
function inheritAttrs(
  parent: Record<string, string>,
  child: Record<string, string>,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(parent)) {
    if (NON_INHERITED_ATTRS.has(k) || k.startsWith("xmlns:") || k.startsWith("xml:")) continue;
    out[k] = v;
  }
  return { ...out, ...child };
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
 * supported icon sets (a single `<svg>` root with shape children, optionally
 * wrapped in presentational `<g>` groups).
 *
 * Nested `<g>` wrappers are *flattened*: a group's inheritable presentation
 * attributes (e.g. `fill`) cascade onto its descendant shapes, and the group
 * element itself is dropped. This keeps the runtime model a flat list of
 * shapes while preserving the per-shape colors of multi-color sets (e.g. Flat
 * Color Icons, which group same-colored details under `<g fill="…">`).
 *
 * It deliberately ignores scripts, styles, defs, and gradients, which is
 * sufficient for line/fill/color icon sets and avoids pulling in a full
 * XML/DOM dependency.
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
  // Stack of inherited attributes contributed by currently-open `<g>` groups.
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
        groupStack.push(inheritAttrs(parent, parseAttrs(t[3] ?? "")));
      }
      continue;
    }

    if (isClosing || !SHAPE_TAGS.has(tag) || t[3] === undefined) continue;
    const inherited = groupStack[groupStack.length - 1] ?? {};
    nodes.push({ tag, attr: inheritAttrs(inherited, parseAttrs(t[3])), child: [] });
  }

  return { viewBox, rootAttr, nodes };
}
