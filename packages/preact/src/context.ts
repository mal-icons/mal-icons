import type { IconContextValue } from "@mal-icons/core";
import { createContext } from "preact";
import type { JSX } from "preact";

/** Theming context value for all mal-icons Preact components. */
export type PreactIconContextValue = IconContextValue<JSX.CSSProperties>;

/** Default (empty) theming configuration. */
export const DefaultIconContext: PreactIconContextValue = {};

/**
 * Preact context carrying icon theming (size, color, className, style).
 * Consumed via `useContext` inside {@link IconBase}; provide values with
 * `<IconContext.Provider value={…}>`.
 */
export const IconContext = createContext<PreactIconContextValue>(DefaultIconContext);
