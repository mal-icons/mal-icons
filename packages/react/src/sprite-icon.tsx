import { resolveIconAttrs } from "@mal-icon/core";
import { useContext } from "react";
import type { CSSProperties } from "react";
import { IconContext } from "./context.ts";
import type { IconBaseProps } from "./icon-base.tsx";

/** Props for {@link SpriteIcon}. */
export interface SpriteIconProps extends IconBaseProps {
  /**
   * Symbol id within the sprite sheet, e.g. `"fi-activity"`. The generated
   * sprite emits `<symbol id="<set>-<rawName>">` entries.
   */
  id: string;
  /**
   * Optional URL of an external sprite sheet. When omitted the reference is
   * a same-document fragment (`#id`), assuming the sprite has been injected
   * into the page; otherwise it becomes `"<href>#id"`.
   */
  href?: string;
}

/**
 * Render an icon by referencing a `<symbol>` in a sprite sheet via
 * `<use href>`. Repeated icons reuse a single cached symbol instead of
 * inlining shape data per instance (SRS FR-8). Theming follows the same
 * {@link IconContext} priority as inline icons.
 */
export function SpriteIcon({
  id,
  href,
  size,
  color,
  title,
  className,
  style,
  ...rest
}: SpriteIconProps) {
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

  const useHref = href ? `${href}#${id}` : `#${id}`;

  return (
    <svg
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
      <use href={useHref} />
    </svg>
  );
}
