import { fileURLToPath } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config

// For this in-repo example we resolve the workspace @mal-icon/* packages to
// their TypeScript *source*, so the example runs straight from source without a
// prior library build — for both the client and the server (SSR) bundle. We use
// explicit aliases (rather than an export condition) because Nuxt's SSR build
// resolves package entries before Vite's per-environment conditions apply. When
// consuming the published npm packages from registries, none of this is needed.
const src = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  // Global design-system styles, shared with the other framework examples.
  css: ["~/assets/css/styles.css"],

  vite: {
    resolve: {
      // Most specific first: the `/fi` set barrel, then the package roots.
      alias: [
        { find: "@mal-icon/vue/fi", replacement: src("../../packages/vue/src/icons/fi/index.ts") },
        { find: "@mal-icon/vue", replacement: src("../../packages/vue/src/index.ts") },
        { find: "@mal-icon/core", replacement: src("../../packages/core/src/index.ts") },
      ],
    },
  },
});
