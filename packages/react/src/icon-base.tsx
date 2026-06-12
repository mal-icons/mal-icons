import {
  animationClass,
  type IconAnimation,
  type IconWeight,
  resolveIconAttrs,
  WEIGHT_STROKE_WIDTH,
} from "@mal-icons/core";
import type { CSSProperties, ReactNode, SVGAttributes } from "react";
import { useContext } from "react";
import { IconContext } from "./context.ts";

/** Props accepted by every generated mal-icons React component. */
export interface IconBaseProps extends Omit<SVGAttributes<SVGSVGElement>, "color"> {
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
  style?: CSSProperties;
}

interface IconBaseInternalProps extends IconBaseProps {
  viewBox: string;
  children?: ReactNode;
}

/**
 * The shared SVG wrapper. Reads theming from {@link IconContext} via
 * `useContext`, applies the SRS override priority, and renders a native
 * `<svg>` with no runtime JSON parsing and no `dangerouslySetInnerHTML`.
 */
export function IconBase({
  viewBox,
  size,
  color,
  secondaryColor,
  weight,
  animate,
  title,
  className,
  style,
  children,
  ...rest
}: IconBaseInternalProps) {
  const conf = useContext(IconContext);
  const {
    size: computedSize,
    color: computedColor,
    className: cls,
  } = resolveIconAttrs({ size, color, className }, conf);

  const fullClassName =
    [cls, animate ? animationClass(animate) : undefined].filter(Boolean).join(" ") || undefined;

  const mergedStyle: CSSProperties | undefined =
    computedColor || secondaryColor || conf.style || style
      ? ({
          color: computedColor,
          ...(secondaryColor ? { "--mal-icons-secondary": secondaryColor } : {}),
          ...conf.style,
          ...style,
        } as CSSProperties)
      : undefined;

  const weightWidth = weight ? WEIGHT_STROKE_WIDTH[weight] : undefined;
  const { strokeWidth: restStrokeWidth, ...restProps } = rest;
  const strokeWidth = weightWidth ?? restStrokeWidth ?? "0";

  return (
    <svg
      viewBox={viewBox}
      stroke="currentColor"
      fill="currentColor"
      width={computedSize}
      height={computedSize}
      className={fullClassName}
      style={mergedStyle}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...conf.attr}
      {...restProps}
      strokeWidth={strokeWidth}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}
