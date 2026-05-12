import { createContext } from "react";
import type { CSSProperties } from "react";
import type { IconContextValue } from "@mal-icon/core";

/** Theming context for all mal-icon React components. */
export type ReactIconContextValue = IconContextValue<CSSProperties>;

/** Default (empty) theming configuration. */
export const DefaultIconContext: ReactIconContextValue = {};

/**
 * React context carrying icon theming (size, color, className, style).
 * Consumed via `useContext` inside {@link IconBase} — never `Consumer`.
 */
export const IconContext = createContext<ReactIconContextValue>(DefaultIconContext);
