import { InjectionToken } from "@angular/core";
import type { IconContextValue } from "@mal-icon/core";

/** Theming context value for all mal-icon Angular components. */
export type AngularIconContextValue = IconContextValue<Record<string, string>>;

/** Default (empty) theming configuration. */
export const DefaultIconContext: AngularIconContextValue = {};

/**
 * Injection token carrying icon theming (size, color, className, attr).
 * Provide it in a component/module to theme all descendant mal-icon
 * components; consumed inside {@link IconBaseComponent}.
 */
export const ICON_CONTEXT = new InjectionToken<AngularIconContextValue>("mal-icon-context", {
  factory: () => DefaultIconContext,
});
