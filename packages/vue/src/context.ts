import type { IconContextValue } from "@mal-icons/core";
import type { InjectionKey } from "vue";
import type { CSSProperties } from "vue";

/** Theming context value for all mal-icons Vue components. */
export type VueIconContextValue = IconContextValue<CSSProperties>;

/** Default (empty) theming configuration. */
export const DefaultIconContext: VueIconContextValue = {};

/**
 * Injection key carrying icon theming (size, color, className, style).
 * Provided with {@link provideIconContext} and consumed via `inject`
 * inside {@link IconBase}.
 */
export const IconContextKey: InjectionKey<VueIconContextValue> = Symbol("mal-icons-context");
