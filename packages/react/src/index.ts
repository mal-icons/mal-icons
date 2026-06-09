import {
  animationClass as coreAnimationClass,
  ICON_ANIMATIONS_CSS as coreIconAnimationsCss,
  WEIGHT_STROKE_WIDTH as coreWeightStrokeWidth,
} from "@mal-icons/core";

export { IconBase, type IconBaseProps } from "./icon-base.tsx";
export { createIcon, type IconComponent } from "./create-icon.tsx";
export { SpriteIcon, type SpriteIconProps } from "./sprite-icon.tsx";
export {
  Icon,
  cdnLoader,
  setLoader,
  setDefaultIconLoader,
  preloadIcon,
  clearIconCache,
  type DynamicIconProps,
  type IconData,
  type IconLoader,
  type IconResolved,
} from "./dynamic.tsx";
export {
  IconContext,
  DefaultIconContext,
  type ReactIconContextValue,
} from "./context.ts";
export type { IconAnimation, IconWeight } from "@mal-icons/core";

// Re-bind core runtime values as local bindings instead of bare re-exports.
// Bun's splitting bundler emits a pure re-export barrel as a "facade" module
// and drops the chunk that defines re-exported symbols, producing an
// `export { ... }` with no backing definition (Node ESM then fails with
// "Export is not defined in module"). A real local binding prevents this.
export const ICON_ANIMATIONS_CSS = coreIconAnimationsCss;
export const WEIGHT_STROKE_WIDTH = coreWeightStrokeWidth;
export const animationClass = coreAnimationClass;
