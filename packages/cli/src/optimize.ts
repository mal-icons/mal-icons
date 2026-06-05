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
const DROP_ATTRS = new Set(["class", "xmlns", "id"]);

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
  for (const [rawKey, rawVal] of Object.entries(node.attr)) {
    if (DROP_ATTRS.has(rawKey)) continue;
    let val = rawVal;
    if (COORD_ATTRS.has(rawKey)) val = roundNumbers(val);
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
  const nodes = parsed.nodes.map(optimizeNode);

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
