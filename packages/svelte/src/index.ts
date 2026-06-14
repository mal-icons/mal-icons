export {
  DefaultIconContext,
  getIconContext,
  type SvelteIconContextValue,
  setIconContext,
} from "./context.ts";
export { default as IconBase } from "./IconBase.svelte";
// Re-export every generated icon set so consumers can also import named icons
// directly from the package root (e.g. `import { FiSearch } from "@mal-icons/svelte"`).
export * from "./icons/ad/index.ts";
export * from "./icons/ci/index.ts";
export * from "./icons/dev/index.ts";
export * from "./icons/fa/index.ts";
export * from "./icons/fab/index.ts";
export * from "./icons/far/index.ts";
export * from "./icons/fc/index.ts";
export * from "./icons/fi/index.ts";
export * from "./icons/io/index.ts";
export * from "./icons/lu/index.ts";
export * from "./icons/oc/index.ts";
export * from "./icons/ti/index.ts";
export * from "./icons/wi/index.ts";
