import { DefaultIconContext as defaultIconContext } from "./context.ts";

export { IconBase, type IconBaseProps } from "./icon-base.tsx";
export { createIcon, type IconComponent, type IconDefaultAttr } from "./create-icon.tsx";
export { IconContext, type ReactNativeIconContextValue } from "./context.ts";

// Re-bind as a local binding instead of a bare re-export. Bun's splitting
// bundler emits a pure re-export barrel as a "facade" module and drops the
// chunk that defines re-exported symbols, producing an `export { ... }` with
// no backing definition (Node ESM then fails with "Export is not defined in
// module"). A real local binding prevents this.
export const DefaultIconContext = defaultIconContext;
