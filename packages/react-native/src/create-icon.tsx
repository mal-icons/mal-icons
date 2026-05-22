import type { NodeTuple } from "@mal-icon/core";
import { createElement, memo } from "react";
import type { ComponentType, ReactElement } from "react";
import { Circle, Ellipse, G, Line, Path, Polygon, Polyline, Rect } from "react-native-svg";
import { IconBase, type IconBaseProps } from "./icon-base.tsx";

/**
 * Root-level SVG attributes baked into a generated icon (e.g. `fill="none"`
 * and `strokeWidth` for stroke-based sets like Feather). They sit between the
 * {@link IconBase} defaults and the consumer's props in priority:
 * `props > defaultAttr > IconBase built-ins`.
 */
export type IconDefaultAttr = Partial<IconBaseProps>;

/**
 * Maps SVG element tags to their `react-native-svg` component. React Native
 * cannot render raw SVG tag strings, so each shape resolves to a typed
 * component at module load.
 */
// biome-ignore lint/suspicious/noExplicitAny: heterogeneous shape components share one map
const TAG_COMPONENTS: Record<string, ComponentType<any>> = {
  circle: Circle,
  ellipse: Ellipse,
  g: G,
  line: Line,
  path: Path,
  polygon: Polygon,
  polyline: Polyline,
  rect: Rect,
};

/**
 * Build an icon component from a viewBox and a flat list of `[tag, attr]`
 * tuples.
 *
 * The shape children are created exactly **once** at module load (static
 * hoisting) — never per render — satisfying the "no runtime tree-walking"
 * requirement. The returned component is wrapped in `React.memo` so it skips
 * re-renders when props are unchanged.
 */
export function createIcon(viewBox: string, nodes: NodeTuple[], defaultAttr?: IconDefaultAttr) {
  const children: ReactElement[] = nodes.map(([tag, attr], i) =>
    createElement(TAG_COMPONENTS[tag] ?? tag, { key: i, ...attr }),
  );

  function Icon(props: IconBaseProps) {
    return (
      <IconBase viewBox={viewBox} {...defaultAttr} {...props}>
        {children}
      </IconBase>
    );
  }

  return memo(Icon);
}

/** A generated mal-icon React Native component. */
export type IconComponent = ReturnType<typeof createIcon>;
