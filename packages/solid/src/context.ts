import type { IconContextValue } from "@mal-icon/core";
import { createContext } from "solid-js";
import type { JSX } from "solid-js";

/** Theming context value for all mal-icon Solid components. */
export type SolidIconContextValue = IconContextValue<JSX.CSSProperties>;

/** Default (empty) theming configuration. */
export const DefaultIconContext: SolidIconContextValue = {};

/**
 * Solid context carrying icon theming (size, color, className, style).
 * Consumed via `useContext` inside {@link IconBase}; provide values with
 * `<IconContext.Provider value={…}>`.
 */
export const IconContext = createContext<SolidIconContextValue>(DefaultIconContext);
