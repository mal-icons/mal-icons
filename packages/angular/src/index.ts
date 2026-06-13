export {
  animationClass,
  ICON_ANIMATIONS_CSS,
  type IconAnimation,
  type IconWeight,
  WEIGHT_STROKE_WIDTH,
} from "@mal-icons/core";
export {
  type AngularIconContextValue,
  DefaultIconContext,
  ICON_CONTEXT,
} from "./context.ts";
export { IconBaseComponent } from "./icon-base.ts";
// Re-export every generated icon set so consumers can also import named icons
// directly from the package root (e.g. `import { FiSearch } from "@mal-icons/angular"`).
export * from "./icons/ci/index.ts";
export * from "./icons/fi/index.ts";
