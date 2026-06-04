import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  // Resolve @mal-icon/* to TypeScript source via the "bun" export condition so
  // the example runs without pre-building the libraries. Drop this when using
  // the published packages from npm.
  resolve: {
    conditions: ["bun", "module", "browser", "import", "default"],
  },
});
