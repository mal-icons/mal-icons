import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  // vite-plugin-solid already adds the "solid" export condition, which resolves
  // the workspace @mal-icon/solid package to its TypeScript source — so the
  // example runs without pre-building the libraries. "bun" is listed too for
  // parity with the other examples. Drop this when consuming the npm packages.
  resolve: {
    conditions: ["solid", "bun", "module", "browser", "import", "default"],
  },
});
