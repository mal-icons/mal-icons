import type { IconContextValue } from "@mal-icon/core";
import { getContext, setContext } from "svelte";

/** Theming context value for all mal-icon Svelte components. */
export type SvelteIconContextValue = IconContextValue<string>;

const ICON_CONTEXT_KEY = Symbol("mal-icon-context");

/** Default (empty) theming configuration. */
export const DefaultIconContext: SvelteIconContextValue = {};

/**
 * Provide icon theming to all descendant mal-icon components. Call during
 * a parent component's initialisation.
 */
export function setIconContext(value: SvelteIconContextValue = DefaultIconContext): void {
  setContext(ICON_CONTEXT_KEY, value);
}

/** Read the current icon theming context (or the empty default). */
export function getIconContext(): SvelteIconContextValue {
  return getContext<SvelteIconContextValue>(ICON_CONTEXT_KEY) ?? DefaultIconContext;
}
