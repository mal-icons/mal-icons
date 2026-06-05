import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    // Resolve the workspace @mal-icons/* packages to source via the "bun" export
    // condition (the `.astro` icon components and their @mal-icons/core helpers),
    // so the example runs without pre-building. Drop this with the npm packages.
    resolve: {
      conditions: ["bun", "module", "browser", "import", "default"],
    },
  },
});
