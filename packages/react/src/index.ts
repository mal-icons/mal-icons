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
export {
  ICON_ANIMATIONS_CSS,
  WEIGHT_STROKE_WIDTH,
  animationClass,
  type IconAnimation,
  type IconWeight,
} from "@mal-icons/core";
