import {
  type IconAnimation,
  type IconWeight,
  WEIGHT_STROKE_WIDTH,
  animationClass,
  resolveIconAttrs,
} from "@mal-icons/core";
import { useContext } from "solid-js";
import type { JSX } from "solid-js";
import h from "solid-js/h";
import { IconContext } from "./context.ts";

/** Props accepted by every generated mal-icons Solid component. */
export interface IconBaseProps {
  /** Width and height. Defaults to the context size or "1em". */
  size?: string | number;
  /** Overrides `currentColor`. */
  color?: string;
  /** Secondary color for multi-tone icons, exposed as `--mal-icons-secondary`. */
  secondaryColor?: string;
  /** Stroke weight preset for stroke-based sets (overrides the baked width). */
  weight?: IconWeight;
  /** CSS-driven animation preset; requires `ICON_ANIMATIONS_CSS` on the page. */
  animate?: IconAnimation;
  /** Accessible label; renders a `<title>` element and sets `role="img"`. */
  title?: string;
  /** Additional class name(s), concatenated after the context className. */
  className?: string;
  /** Inline styles, merged after the context style. */
  style?: JSX.CSSProperties;
  /** Any other SVG attribute is forwarded to the root `<svg>`. */
  [key: string]: unknown;
}

interface IconBaseInternalProps extends IconBaseProps {
  viewBox: string;
  defaultAttr?: Record<string, unknown>;
  children?: JSX.Element;
}

/**
 * The shared SVG wrapper. Reads theming from {@link IconContext} via
 * `useContext`, applies the SRS override priority, and renders a native
 * `<svg>` with no runtime JSON parsing and no `innerHTML`.
 */
export function IconBase(props: IconBaseInternalProps): JSX.Element {
  const conf = useContext(IconContext);
  const {
    size: computedSize,
    color: computedColor,
    className: cls,
  } = resolveIconAttrs({ size: props.size, color: props.color, className: props.className }, conf);

  const fullClassName =
    [cls, props.animate ? animationClass(props.animate) : undefined].filter(Boolean).join(" ") ||
    undefined;

  const mergedStyle =
    computedColor || props.secondaryColor || conf.style || props.style
      ? ({
          color: computedColor,
          ...(props.secondaryColor ? { "--mal-icons-secondary": props.secondaryColor } : {}),
          ...conf.style,
          ...props.style,
        } as JSX.CSSProperties)
      : undefined;

  const weightWidth = props.weight ? WEIGHT_STROKE_WIDTH[props.weight] : undefined;

  return h(
    "svg",
    {
      viewBox: props.viewBox,
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      width: computedSize,
      height: computedSize,
      class: fullClassName,
      style: mergedStyle,
      role: props.title ? "img" : "presentation",
      "aria-hidden": props.title ? undefined : "true",
      ...conf.attr,
      ...props.defaultAttr,
      ...(weightWidth !== undefined ? { "stroke-width": weightWidth } : {}),
    },
    [props.title ? h("title", {}, props.title) : null, props.children],
  ) as unknown as JSX.Element;
}
