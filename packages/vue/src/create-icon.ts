import type { NodeTuple } from "@mal-icons/core";
import { defineComponent, h } from "vue";
import type { PropType, VNode } from "vue";
import { IconBase, type IconBaseProps } from "./icon-base.ts";

/**
 * Root-level SVG attributes baked into a generated icon (e.g. `fill="none"`
 * and `strokeWidth` for stroke-based sets like Feather). They sit between
 * the {@link IconBase} defaults and the consumer's props in priority:
 * `props > defaultAttr > IconBase built-ins`.
 */
export type IconDefaultAttr = Record<string, unknown>;

/**
 * Build an icon component from a viewBox and a flat list of `[tag, attr]`
 * tuples. The shape nodes are static data captured once at module load —
 * there is no runtime JSON parsing or tree-walking of strings per render.
 */
export function createIcon(viewBox: string, nodes: NodeTuple[], defaultAttr?: IconDefaultAttr) {
  return defineComponent({
    name: "MalIcon",
    props: {
      size: { type: [String, Number] as PropType<string | number>, default: undefined },
      color: { type: String, default: undefined },
      title: { type: String, default: undefined },
      className: { type: String, default: undefined },
      style: { type: Object as PropType<IconBaseProps["style"]>, default: undefined },
    },
    setup(props) {
      return () => {
        const children: VNode[] = nodes.map(([tag, attr]) => h(tag, attr));
        return h(
          IconBase,
          {
            viewBox,
            defaultAttr,
            size: props.size,
            color: props.color,
            title: props.title,
            className: props.className,
            style: props.style,
          },
          { default: () => children },
        );
      };
    },
  });
}
