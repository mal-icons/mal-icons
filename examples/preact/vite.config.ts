import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [preact()],
  // Resolve the workspace @mal-icons/* packages to their TypeScript source via
  // the "bun" export condition, so the example runs without pre-building the
  // libraries. In a real app installing from npm, drop this — the published
  // "import"/"require" entry points are used automatically.
  resolve: {
    conditions: ["bun", "module", "browser", "import", "default"],
  },
});
