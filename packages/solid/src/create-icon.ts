import type { NodeTuple } from "@mal-icons/core";
import { mergeProps } from "solid-js";
import type { JSX } from "solid-js";
import h from "solid-js/h";
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
 * tuples. The shape data is captured once at module load; there is no
 * runtime JSON parsing or tree-walking of strings per render.
 */
export function createIcon(viewBox: string, nodes: NodeTuple[], defaultAttr?: IconDefaultAttr) {
  return function Icon(props: IconBaseProps): JSX.Element {
    const children = nodes.map(([tag, attr]) => h(tag, attr));
    return h(
      IconBase,
      mergeProps({ viewBox, defaultAttr }, props),
      children,
    ) as unknown as JSX.Element;
  };
}
