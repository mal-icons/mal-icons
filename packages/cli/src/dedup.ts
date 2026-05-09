import { createHash } from "node:crypto";
import type { OptimizedIcon } from "./optimize.ts";

/**
 * Compute a stable content hash for an optimized icon. The hash is derived
 * from the viewBox, baked root attributes, and shape nodes in a canonical
 * order, guaranteeing deterministic output (same input → same hash).
 */
export function contentHash(icon: OptimizedIcon): string {
  const canonical = JSON.stringify({
    v: icon.viewBox,
    a: sortRecord(icon.defaultAttr),
    n: icon.nodes.map((node) => ({ t: node.tag, a: sortRecord(node.attr) })),
  });
  return createHash("sha1").update(canonical).digest("hex").slice(0, 16);
}

function sortRecord<T>(rec: Record<string, T>): Record<string, T> {
  const out: Record<string, T> = {};
  for (const key of Object.keys(rec).sort()) {
    out[key] = rec[key] as T;
  }
  return out;
}
