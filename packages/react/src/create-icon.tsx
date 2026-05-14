import { createElement, memo } from "react";
import type { ReactElement } from "react";
import type { NodeTuple } from "@mal-icon/core";
import { IconBase, type IconBaseProps } from "./icon-base.tsx";

/** A generated mal-icon React component. */
export type IconComponent = ReturnType<typeof createIcon>;

/**
 * Root-level SVG attributes baked into a generated icon (e.g. `fill="none"`
 * and `strokeWidth` for stroke-based sets like Feather). They sit between
 * the {@link IconBase} defaults and the consumer's props in priority:
 * `props > defaultAttr > IconBase built-ins`.
 */
export type IconDefaultAttr = Partial<IconBaseProps>;

/**
 * Build an icon component from a viewBox and a flat list of `[tag, attr]`
 * tuples.
 *
 * The shape children are created exactly **once** at module load (static
 * hoisting) — never per render — satisfying the "no runtime tree-walking"
 * requirement. The returned component is wrapped in `React.memo` so it
 * skips re-renders when props are unchanged.
 */
export function createIcon(viewBox: string, nodes: NodeTuple[], defaultAttr?: IconDefaultAttr) {
  const children: ReactElement[] = nodes.map(([tag, attr], i) =>
    createElement(tag, { key: i, ...attr }),
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
