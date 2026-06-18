import { provide } from "vue";
import { DefaultIconContext, IconContextKey, type VueIconContextValue } from "./context.ts";

export { DefaultIconContext, IconContextKey, type VueIconContextValue } from "./context.ts";
export { createIcon, type IconDefaultAttr } from "./create-icon.ts";
export { IconBase, type IconBaseProps } from "./icon-base.ts";
// Re-export every generated icon set so consumers can also import named icons
// directly from the package root (e.g. `import { FiSearch } from "@mal-icons/vue"`).
export * from "./icons/ad/index.ts";
export * from "./icons/bs/index.ts";
export * from "./icons/bx/index.ts";
export * from "./icons/bxl/index.ts";
export * from "./icons/bxs/index.ts";
export * from "./icons/cg/index.ts";
export * from "./icons/ci/index.ts";
export * from "./icons/dev/index.ts";
export * from "./icons/fa/index.ts";
export * from "./icons/fab/index.ts";
export * from "./icons/far/index.ts";
export * from "./icons/fc/index.ts";
export * from "./icons/fi/index.ts";
export * from "./icons/gi/index.ts";
export * from "./icons/gr/index.ts";
export * from "./icons/hi/index.ts";
export * from "./icons/io/index.ts";
export * from "./icons/la/index.ts";
export * from "./icons/lu/index.ts";
export * from "./icons/mdf/index.ts";
export * from "./icons/mdr/index.ts";
export * from "./icons/mds/index.ts";
export * from "./icons/mdt/index.ts";
export * from "./icons/mso/index.ts";
export * from "./icons/msr/index.ts";
export * from "./icons/mss/index.ts";
export * from "./icons/oc/index.ts";
export * from "./icons/ph/index.ts";
export * from "./icons/ri/index.ts";
export * from "./icons/rx/index.ts";
export * from "./icons/si/index.ts";
export * from "./icons/sl/index.ts";
export * from "./icons/tb/index.ts";
export * from "./icons/tf/index.ts";
export * from "./icons/ti/index.ts";
export * from "./icons/vsc/index.ts";
export * from "./icons/wi/index.ts";

/**
 * Provide icon theming to all descendant mal-icons components. Call inside a
 * parent component's `setup`.
 */
export function provideIconContext(value: VueIconContextValue = DefaultIconContext): void {
  provide(IconContextKey, value);
}
