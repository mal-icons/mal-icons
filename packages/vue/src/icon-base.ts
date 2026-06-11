import { resolveIconAttrs } from "@mal-icons/core";
import type { CSSProperties, PropType, VNode } from "vue";
import { defineComponent, h, inject } from "vue";
import { DefaultIconContext, IconContextKey } from "./context.ts";

/** Props accepted by every generated mal-icons Vue component. */
export interface IconBaseProps {
  /** Width and height. Defaults to the context size or "1em". */
  size?: string | number;
  /** Overrides `currentColor`. */
  color?: string;
  /** Accessible label; renders a `<title>` element and sets `role="img"`. */
  title?: string;
  /** Additional class name(s), concatenated after the context className. */
  className?: string;
  /** Inline styles, merged after the context style. */
  style?: CSSProperties;
}

/**
 * The shared SVG wrapper. Reads theming from the injected icon context,
 * applies the SRS override priority, and renders a native `<svg>` with no
 * runtime JSON parsing and no `v-html`.
 */
export const IconBase = defineComponent({
  name: "IconBase",
  inheritAttrs: false,
  props: {
    viewBox: { type: String, required: true },
    size: { type: [String, Number] as PropType<string | number>, default: undefined },
    color: { type: String, default: undefined },
    title: { type: String, default: undefined },
    className: { type: String, default: undefined },
    style: { type: Object as PropType<CSSProperties>, default: undefined },
    defaultAttr: {
      type: Object as PropType<Record<string, unknown>>,
      default: undefined,
    },
  },
  setup(props, { slots, attrs }) {
    const conf = inject(IconContextKey, DefaultIconContext);
    return () => {
      const {
        size: computedSize,
        color: computedColor,
        className: cls,
      } = resolveIconAttrs(
        { size: props.size, color: props.color, className: props.className },
        conf,
      );

      const mergedStyle: CSSProperties | undefined =
        computedColor || conf.style || props.style
          ? { color: computedColor, ...conf.style, ...props.style }
          : undefined;

      const children: VNode[] = [];
      if (props.title) children.push(h("title", props.title));
      const slotChildren = slots.default?.();
      if (slotChildren) children.push(...slotChildren);

      return h(
        "svg",
        {
          viewBox: props.viewBox,
          stroke: "currentColor",
          fill: "currentColor",
          "stroke-width": "0",
          width: computedSize,
          height: computedSize,
          class: cls,
          style: mergedStyle,
          role: props.title ? "img" : "presentation",
          "aria-hidden": props.title ? undefined : "true",
          ...conf.attr,
          ...props.defaultAttr,
          ...attrs,
        },
        children,
      );
    };
  },
});
