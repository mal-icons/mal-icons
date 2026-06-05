import { InjectionToken } from "@angular/core";
import type { IconContextValue } from "@mal-icons/core";

/** Theming context value for all mal-icons Angular components. */
export type AngularIconContextValue = IconContextValue<Record<string, string>>;

/** Default (empty) theming configuration. */
export const DefaultIconContext: AngularIconContextValue = {};

/**
 * Injection token carrying icon theming (size, color, className, attr).
 * Provide it in a component/module to theme all descendant mal-icons
 * components; consumed inside {@link IconBaseComponent}.
 */
export const ICON_CONTEXT = new InjectionToken<AngularIconContextValue>("mal-icons-context", {
  factory: () => DefaultIconContext,
});
