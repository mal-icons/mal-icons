import { WEIGHT_STROKE_WIDTH, animationClass, resolveIconAttrs } from "@mal-icons/core";
import type { NodeTuple } from "@mal-icons/core";
import { type ReactElement, createElement } from "react";
import type { IconBaseProps } from "./icon-base.tsx";

/**
 * React Server Component build of mal-icons (SRS §16.2).
 *
 * The default React entry reads theming through `useContext`, which is not
 * available in Server Components. This module renders the exact same SVG
 * markup with **no hooks and no `React.memo`**, so generated icons can be
 * imported directly into Server Components. Theming via props still works;
 * context-based theming is intentionally unavailable on the server.
 */

/** Props accepted by the server icon renderer (same surface as the client). */
export type ServerIconProps = IconBaseProps;

/**
 * The hook-free SVG wrapper. Applies the same prop priority and a11y rules as
 * the client {@link IconBase} but without any React context lookup.
 */
export function IconBaseServer({
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
}: IconBaseProps & { viewBox: string; children?: ReactElement[] }) {
  const {
    size: computedSize,
    color: computedColor,
    className: cls,
  } = resolveIconAttrs({ size, color, className }, {});

  const fullClassName =
    [cls, animate ? animationClass(animate) : undefined].filter(Boolean).join(" ") || undefined;

  const mergedStyle =
    computedColor || secondaryColor || style
      ? ({
          color: computedColor,
          ...(secondaryColor ? { "--mal-icons-secondary": secondaryColor } : {}),
          ...style,
        } as IconBaseProps["style"])
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
      {...restProps}
      strokeWidth={strokeWidth}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/** Root-level attributes baked into a server icon (matches the client type). */
export type IconDefaultAttr = Partial<IconBaseProps>;

/**
 * Server-component counterpart to `createIcon`. Builds the shape children once
 * at module load and returns a plain function component (no `memo`), suitable
 * for direct use in React Server Components.
 */
export function createServerIcon(
  viewBox: string,
  nodes: NodeTuple[],
  defaultAttr?: IconDefaultAttr,
) {
  const children: ReactElement[] = nodes.map(([tag, attr], i) =>
    createElement(tag, { key: i, ...attr }),
  );
  return function ServerIcon(props: ServerIconProps) {
    return (
      <IconBaseServer viewBox={viewBox} {...defaultAttr} {...props}>
        {children}
      </IconBaseServer>
    );
  };
}
