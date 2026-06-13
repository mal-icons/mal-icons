import type { IconNode } from "@mal-icons/core";
import type { IconSource } from "../../../icons-data/sources.config";
import { toCamelAttr } from "./naming.ts";
import type { ParsedSvg } from "./svg.ts";

/** Attributes whose values contain coordinates we round to 2 decimals. */
const COORD_ATTRS = new Set([
  "d",
  "points",
  "cx",
  "cy",
  "r",
  "rx",
  "ry",
  "x",
  "y",
  "x1",
  "y1",
  "x2",
  "y2",
  "width",
  "height",
]);

/** Attributes we always drop from child shapes (handled by the runtime). */
const DROP_ATTRS = new Set(["class", "xmlns", "id", "style"]);

/** SVG presentation properties lifted out of an inline `style` declaration. */
const STYLE_PROPS = new Set([
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
]);

/**
 * Expand an inline `style="fill:none;stroke:#000;…"` declaration into discrete
 * presentation attributes so the usual color-folding and camel/kebab handling
 * applies. Some sets (e.g. Ionicons outline variants) carry their stroke
 * geometry this way instead of as attributes. Existing attributes win over
 * style declarations, and the raw `style` key is dropped afterwards.
 */
function expandInlineStyle(attr: Record<string, string>): Record<string, string> {
  const style = attr.style;
  if (!style) return attr;
  const out: Record<string, string> = { ...attr };
  for (const decl of style.split(";")) {
    const idx = decl.indexOf(":");
    if (idx === -1) continue;
    const prop = decl.slice(0, idx).trim().toLowerCase();
    let value = decl.slice(idx + 1).trim();
    if (!prop || !value || !STYLE_PROPS.has(prop)) continue;
    if (prop === "stroke-width") value = value.replace(/px$/i, "");
    if (!(prop in out)) out[prop] = value;
  }
  return out;
}

/** Round every numeric token in a string to at most 2 decimals (deterministic). */
export function roundNumbers(value: string): string {
  return value.replace(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi, (n) => {
    const num = Number(n);
    if (!Number.isFinite(num)) return n;
    const rounded = Math.round(num * 100) / 100;
    return String(rounded);
  });
}

/** Normalize a single shape node's attributes deterministically. */
function optimizeNode(node: IconNode): IconNode {
  const out: Record<string, string> = {};
  for (const [rawKey, rawVal] of Object.entries(expandInlineStyle(node.attr))) {
    if (DROP_ATTRS.has(rawKey)) continue;
    let val = rawVal;
    if (COORD_ATTRS.has(rawKey)) val = roundNumbers(val).replace(/\s+/g, " ").trim();
    // Replace concrete colors with currentColor; keep "none" as-is.
    if ((rawKey === "fill" || rawKey === "stroke") && val !== "none") {
      val = "currentColor";
    }
    out[toCamelAttr(rawKey)] = val;
  }
  return { tag: node.tag, attr: out, child: [] };
}

/** The optimized, generation-ready icon shape. */
export interface OptimizedIcon {
  viewBox: string;
  /** Root attributes to bake into the component (camelCased for React). */
  defaultAttr: Record<string, string | number>;
  nodes: IconNode[];
}

/**
 * Apply SVGO-style passes deterministically: round coordinates, strip
 * redundant attributes, fold concrete colors to `currentColor`, and lift
 * the relevant root presentation attributes into `defaultAttr`.
 */
export function optimize(parsed: ParsedSvg, source: IconSource): OptimizedIcon {
  const nodes = parsed.nodes
    .map(optimizeNode)
    // Fill sets (e.g. Circum) wrap paths in a presentational `<g id="…">`.
    // Once the id is stripped the group carries nothing, so drop the empty
    // wrapper rather than emit a useless `<g></g>` element.
    .filter((n) => !(n.tag === "g" && Object.keys(n.attr).length === 0));

  const defaultAttr: Record<string, string | number> = {};
  if (source.style === "stroke") {
    // Stroke sets rely on fill="none" and a fixed stroke geometry.
    defaultAttr.fill = "none";
    const sw = parsed.rootAttr["stroke-width"];
    if (sw) defaultAttr.strokeWidth = Number(roundNumbers(sw));
    const lc = parsed.rootAttr["stroke-linecap"];
    if (lc) defaultAttr.strokeLinecap = lc;
    const lj = parsed.rootAttr["stroke-linejoin"];
    if (lj) defaultAttr.strokeLinejoin = lj;
  }

  return { viewBox: parsed.viewBox.trim(), defaultAttr, nodes };
}
