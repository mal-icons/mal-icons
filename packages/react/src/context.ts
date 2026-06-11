import type { IconContextValue } from "@mal-icons/core";
import type { CSSProperties } from "react";
import { createContext } from "react";

/** Theming context for all mal-icons React components. */
export type ReactIconContextValue = IconContextValue<CSSProperties>;

/** Default (empty) theming configuration. */
export const DefaultIconContext: ReactIconContextValue = {};

/**
 * React context carrying icon theming (size, color, className, style).
 * Consumed via `useContext` inside {@link IconBase} — never `Consumer`.
 */
export const IconContext = createContext<ReactIconContextValue>(DefaultIconContext);
