import { provide } from "vue";
import { DefaultIconContext, IconContextKey, type VueIconContextValue } from "./context.ts";

export { DefaultIconContext, IconContextKey, type VueIconContextValue } from "./context.ts";
export { createIcon, type IconDefaultAttr } from "./create-icon.ts";
export { IconBase, type IconBaseProps } from "./icon-base.ts";
// Re-export every generated icon set so consumers can also import named icons
// directly from the package root (e.g. `import { FiSearch } from "@mal-icons/vue"`).
export * from "./icons/ci/index.ts";
export * from "./icons/fa/index.ts";
export * from "./icons/fab/index.ts";
export * from "./icons/far/index.ts";
export * from "./icons/fi/index.ts";
export * from "./icons/io/index.ts";
export * from "./icons/oc/index.ts";
export * from "./icons/ti/index.ts";

/**
 * Provide icon theming to all descendant mal-icons components. Call inside a
 * parent component's `setup`.
 */
export function provideIconContext(value: VueIconContextValue = DefaultIconContext): void {
  provide(IconContextKey, value);
}
