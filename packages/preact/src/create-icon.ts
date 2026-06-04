import type { NodeTuple } from "@mal-icon/core";
import { h } from "preact";
import type { JSX } from "preact";
import { IconBase, type IconBaseProps } from "./icon-base.ts";

/**
 * Root-level SVG attributes baked into a generated icon (e.g. `fill="none"`
 * and `stroke-width` for stroke-based sets like Feather). They sit between
 * the {@link IconBase} defaults and the consumer's props in priority:
 * `props > defaultAttr > IconBase built-ins`.
 */
export type IconDefaultAttr = Record<string, unknown>;

/**
 * Build an icon component from a viewBox and a flat list of `[tag, attr]`
 * tuples. The shape children are created exactly **once** at module load —
 * never per render — satisfying the "no runtime tree-walking" requirement.
 */
export function createIcon(viewBox: string, nodes: NodeTuple[], defaultAttr?: IconDefaultAttr) {
  const children: JSX.Element[] = nodes.map(([tag, attr]) => h(tag, attr));
  return function Icon(props: IconBaseProps): JSX.Element {
    return h(IconBase, { viewBox, defaultAttr, ...props }, children);
  };
}
