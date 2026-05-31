import { provide } from "vue";
import { DefaultIconContext, IconContextKey, type VueIconContextValue } from "./context.ts";

export { IconBase, type IconBaseProps } from "./icon-base.ts";
export { createIcon, type IconDefaultAttr } from "./create-icon.ts";
export { IconContextKey, DefaultIconContext, type VueIconContextValue } from "./context.ts";

/**
 * Provide icon theming to all descendant mal-icons components. Call inside a
 * parent component's `setup`.
 */
export function provideIconContext(value: VueIconContextValue = DefaultIconContext): void {
  provide(IconContextKey, value);
}
