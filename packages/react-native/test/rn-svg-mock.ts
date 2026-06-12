import { mock } from "bun:test";
import type { ReactNode } from "react";
import { createElement } from "react";

/**
 * Lightweight `react-native-svg` stand-in for unit tests.
 *
 * The real package pulls in `react-native`'s Flow-typed entry, which the test
 * runner cannot parse. Each shape renders the equivalent DOM SVG host element
 * so the adapter can be exercised with `react-dom/server` and compared against
 * the web adapters for parity.
 */
function host(tag: string) {
  return ({ children, ...props }: { children?: ReactNode } & Record<string, unknown>) =>
    createElement(tag, props, children);
}

/**
 * The root `<Svg>` translates React Native accessibility props into their DOM
 * equivalents so the rendered markup is directly assertable.
 */
function SvgHost({
  children,
  accessibilityRole,
  accessibilityLabel,
  accessible,
  style,
  ...props
}: {
  children?: ReactNode;
  accessibilityRole?: string;
  accessibilityLabel?: string;
  accessible?: boolean;
  style?: unknown;
} & Record<string, unknown>) {
  // RN styles are arrays/objects that the DOM cannot consume; ignore them here.
  void style;
  void accessible;
  const role = accessibilityRole === "image" ? "img" : accessibilityRole;
  return createElement("svg", { ...props, role, "aria-label": accessibilityLabel }, children);
}

export function registerReactNativeSvgMock(): void {
  mock.module("react-native-svg", () => ({
    Svg: SvgHost,
    Path: host("path"),
    Circle: host("circle"),
    Ellipse: host("ellipse"),
    G: host("g"),
    Line: host("line"),
    Polygon: host("polygon"),
    Polyline: host("polyline"),
    Rect: host("rect"),
  }));
}
