import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [svelte()],
  // Resolve @mal-icons/* to source (.ts/.svelte) via the "bun" export condition
  // so the example runs without pre-building the libraries. Drop this when
  // using the published packages from npm.
  resolve: {
    conditions: ["bun", "module", "browser", "import", "default"],
  },
});
