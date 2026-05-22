import type { IconContextValue } from "@mal-icon/core";
import { createContext } from "react";
import type { StyleProp, ViewStyle } from "react-native";

/** Theming context value for all mal-icon React Native components. */
export type ReactNativeIconContextValue = IconContextValue<StyleProp<ViewStyle>>;

/** Default (empty) theming configuration. */
export const DefaultIconContext: ReactNativeIconContextValue = {};

/**
 * React context carrying icon theming (size, color, style). Consumed via
 * `useContext` inside {@link IconBase} — never `Consumer`.
 */
export const IconContext = createContext<ReactNativeIconContextValue>(DefaultIconContext);
