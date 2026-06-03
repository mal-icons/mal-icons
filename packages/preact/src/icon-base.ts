import {
  type IconAnimation,
  type IconWeight,
  WEIGHT_STROKE_WIDTH,
  animationClass,
  resolveIconAttrs,
} from "@mal-icon/core";
import { type ComponentChildren, h } from "preact";
import type { JSX } from "preact";
import { useContext } from "preact/hooks";
import { IconContext } from "./context.ts";

/** Props accepted by every generated mal-icon Preact component. */
export interface IconBaseProps {
  /** Width and height. Defaults to the context size or "1em". */
  size?: string | number;
  /** Overrides `currentColor`. */
  color?: string;
  /** Secondary color for multi-tone icons, exposed as `--mal-icon-secondary`. */
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
  children?: ComponentChildren;
}

/**
 * The shared SVG wrapper. Reads theming from {@link IconContext} via
 * `useContext`, applies the SRS override priority, and renders a native
 * `<svg>` with no runtime JSON parsing and no `dangerouslySetInnerHTML`.
 */
export function IconBase(props: IconBaseInternalProps): JSX.Element {
  const {
    viewBox,
    size,
    color,
    secondaryColor,
    weight,
    animate,
    title,
    className,
    style,
    defaultAttr,
    children,
    ...rest
  } = props;

  const conf = useContext(IconContext);
  const {
    size: computedSize,
    color: computedColor,
    className: cls,
  } = resolveIconAttrs({ size, color, className }, conf);

  const fullClassName =
    [cls, animate ? animationClass(animate) : undefined].filter(Boolean).join(" ") || undefined;

  const mergedStyle: JSX.CSSProperties | undefined =
    computedColor || secondaryColor || conf.style || style
      ? ({
          color: computedColor,
          ...(secondaryColor ? { "--mal-icon-secondary": secondaryColor } : {}),
          ...conf.style,
          ...style,
        } as JSX.CSSProperties)
      : undefined;

  const weightWidth = weight ? WEIGHT_STROKE_WIDTH[weight] : undefined;

  return h(
    "svg",
    {
      viewBox,
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      width: computedSize,
      height: computedSize,
      class: fullClassName,
      style: mergedStyle,
      role: title ? "img" : "presentation",
      "aria-hidden": title ? undefined : "true",
      ...conf.attr,
      ...defaultAttr,
      ...rest,
      ...(weightWidth !== undefined ? { "stroke-width": weightWidth } : {}),
    },
    [title ? h("title", null, title) : null, children],
  );
}
