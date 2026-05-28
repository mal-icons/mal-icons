// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  // Global design-system styles, shared with the other framework examples.
  css: ["~/assets/css/styles.css"],

  // The mal-icon packages ship modern ESM/TS. Resolve the workspace
  // @mal-icon/* packages to their TypeScript source via the "bun" export
  // condition so the example runs without pre-building the libraries — for both
  // the client bundle and the server (SSR) bundle. When consuming the published
  // npm packages, none of this is necessary.
  vite: {
    resolve: {
      conditions: ["bun", "module", "browser", "import", "default"],
    },
    ssr: {
      resolve: {
        conditions: ["bun", "module", "node", "import", "default"],
      },
    },
  },
});
