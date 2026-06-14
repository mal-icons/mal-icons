import {
  animationClass as coreAnimationClass,
  ICON_ANIMATIONS_CSS as coreIconAnimationsCss,
  WEIGHT_STROKE_WIDTH as coreWeightStrokeWidth,
} from "@mal-icons/core";

export type { IconAnimation, IconWeight } from "@mal-icons/core";
export {
  DefaultIconContext,
  IconContext,
  type SolidIconContextValue,
} from "./context.ts";
export { createIcon, type IconDefaultAttr } from "./create-icon.ts";
export { IconBase, type IconBaseProps } from "./icon-base.ts";
// Re-export every generated icon set so consumers can also import named icons
// directly from the package root (e.g. `import { FiSearch } from "@mal-icons/solid"`).
export * from "./icons/ci/index.ts";
export * from "./icons/fa/index.ts";
export * from "./icons/fab/index.ts";
export * from "./icons/far/index.ts";
export * from "./icons/fi/index.ts";
export * from "./icons/io/index.ts";
export * from "./icons/ti/index.ts";

// Re-bind core runtime values as local bindings instead of bare re-exports.
// Bun's splitting bundler emits a pure re-export barrel as a "facade" module
// and drops the chunk that defines re-exported symbols, producing an
// `export { ... }` with no backing definition (Node ESM then fails with
// "Export is not defined in module"). A real local binding prevents this.
export const ICON_ANIMATIONS_CSS = coreIconAnimationsCss;
export const WEIGHT_STROKE_WIDTH = coreWeightStrokeWidth;
export const animationClass = coreAnimationClass;
