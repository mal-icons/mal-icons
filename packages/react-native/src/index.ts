import { DefaultIconContext as defaultIconContext } from "./context.ts";

export { IconContext, type ReactNativeIconContextValue } from "./context.ts";
export { createIcon, type IconComponent, type IconDefaultAttr } from "./create-icon.tsx";
export { IconBase, type IconBaseProps } from "./icon-base.tsx";
// Re-export every generated icon set so consumers can also import named icons
// directly from the package root (e.g. `import { FiSearch } from "@mal-icons/react-native"`).
export * from "./icons/ad/index.ts";
export * from "./icons/bs/index.ts";
export * from "./icons/cg/index.ts";
export * from "./icons/ci/index.ts";
export * from "./icons/dev/index.ts";
export * from "./icons/fa/index.ts";
export * from "./icons/fab/index.ts";
export * from "./icons/far/index.ts";
export * from "./icons/fc/index.ts";
export * from "./icons/fi/index.ts";
export * from "./icons/gi/index.ts";
export * from "./icons/gr/index.ts";
export * from "./icons/hi/index.ts";
export * from "./icons/io/index.ts";
export * from "./icons/lu/index.ts";
export * from "./icons/mdf/index.ts";
export * from "./icons/mdr/index.ts";
export * from "./icons/mds/index.ts";
export * from "./icons/mdt/index.ts";
export * from "./icons/mso/index.ts";
export * from "./icons/msr/index.ts";
export * from "./icons/mss/index.ts";
export * from "./icons/oc/index.ts";
export * from "./icons/ri/index.ts";
export * from "./icons/rx/index.ts";
export * from "./icons/si/index.ts";
export * from "./icons/sl/index.ts";
export * from "./icons/tf/index.ts";
export * from "./icons/ti/index.ts";
export * from "./icons/vsc/index.ts";
export * from "./icons/wi/index.ts";

// Re-bind as a local binding instead of a bare re-export. Bun's splitting
// bundler emits a pure re-export barrel as a "facade" module and drops the
// chunk that defines re-exported symbols, producing an `export { ... }` with
// no backing definition (Node ESM then fails with "Export is not defined in
// module"). A real local binding prevents this.
export const DefaultIconContext = defaultIconContext;
