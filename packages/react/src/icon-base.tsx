import { resolveIconAttrs } from "@mal-icon/core";
import { useContext } from "react";
import type { CSSProperties, ReactNode, SVGAttributes } from "react";
import { IconContext } from "./context.ts";

/** Props accepted by every generated mal-icon React component. */
export interface IconBaseProps extends Omit<SVGAttributes<SVGSVGElement>, "color"> {
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

  const mergedStyle: CSSProperties | undefined =
    computedColor || conf.style || style
      ? { color: computedColor, ...conf.style, ...style }
      : undefined;

  return (
    <svg
      viewBox={viewBox}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      width={computedSize}
      height={computedSize}
      className={cls}
      style={mergedStyle}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...conf.attr}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}
