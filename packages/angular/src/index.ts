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
export * from "./icons/ad/index.ts";
export * from "./icons/cg/index.ts";
export * from "./icons/ci/index.ts";
export * from "./icons/dev/index.ts";
export * from "./icons/fa/index.ts";
export * from "./icons/fab/index.ts";
export * from "./icons/far/index.ts";
export * from "./icons/fc/index.ts";
export * from "./icons/fi/index.ts";
export * from "./icons/gr/index.ts";
export * from "./icons/hi/index.ts";
export * from "./icons/io/index.ts";
export * from "./icons/lu/index.ts";
export * from "./icons/oc/index.ts";
export * from "./icons/sl/index.ts";
export * from "./icons/ti/index.ts";
export * from "./icons/vsc/index.ts";
export * from "./icons/wi/index.ts";
