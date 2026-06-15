import { resolveRootPaint } from "@mal-icons/core";
import type { ReactNode } from "react";
import { useContext } from "react";
import type { SvgProps } from "react-native-svg";
import { Svg } from "react-native-svg";
import { IconContext } from "./context.ts";

/** Default rendered size (px) when neither a prop nor context provides one. */
const DEFAULT_SIZE = 24;

/** Props accepted by every generated mal-icons React Native component. */
export interface IconBaseProps extends Omit<SvgProps, "color" | "width" | "height" | "viewBox"> {
  /** Width and height. Defaults to the context size or 24. */
  size?: string | number;
  /** Overrides `currentColor`. */
  color?: string;
  /**
   * Render the icon's own colors instead of theming via `currentColor`. When
   * `true`, the root `<Svg>` omits its `stroke`/`fill` `currentColor` defaults.
   */
  multicolor?: boolean;
  /** Accessible label; sets `title`/`accessibilityLabel` and `role="image"`. */
  title?: string;
}

interface IconBaseInternalProps extends IconBaseProps {
  viewBox: string;
  children?: ReactNode;
}

/**
 * The shared `react-native-svg` wrapper. Reads theming from {@link IconContext}
 * via `useContext`, applies the SRS override priority (`props > context >
 * default`), and renders a native `<Svg>` with no runtime JSON parsing.
 *
 * Unlike the web adapters, React Native has no DOM/CSS, so sizes resolve to a
 * numeric default and theming flows through the `color`/`style` props that
 * `react-native-svg` understands.
 */
export function IconBase({
  viewBox,
  size,
  color,
  multicolor,
  title,
  style,
  children,
  ...rest
}: IconBaseInternalProps) {
  const conf = useContext(IconContext);
  const computedSize = size ?? conf.size ?? DEFAULT_SIZE;
  const computedColor = color ?? conf.color;
  const mergedStyle = conf.style || style ? [conf.style, style] : undefined;

  return (
    <Svg
      viewBox={viewBox}
      width={computedSize}
      height={computedSize}
      color={computedColor}
      {...resolveRootPaint(multicolor)}
      strokeWidth={0}
      title={title}
      accessibilityRole={title ? "image" : undefined}
      accessibilityLabel={title}
      accessible={title ? true : undefined}
      style={mergedStyle}
      {...conf.attr}
      {...rest}
    >
      {children}
    </Svg>
  );
}
