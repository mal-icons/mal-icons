import { defineConfig } from "vite";

// Angular needs legacy (experimental) decorators. We keep dependency injection
// metadata-free by using `inject()` in the library, so esbuild's decorator
// transform is enough — no `emitDecoratorMetadata` required. Templates are
// compiled in the browser (JIT) via `@angular/compiler`.
export default defineConfig({
  resolve: {
    // Resolve workspace @mal-icons/* packages to their TypeScript source via the
    // "bun" export condition, so the example runs without pre-building the
    // libraries. In a real app installing from npm, drop this.
    conditions: ["bun", "module", "browser", "import", "default"],
  },
  optimizeDeps: {
    exclude: ["@mal-icons/angular", "@mal-icons/core"],
  },
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
        useDefineForClassFields: false,
      },
    },
  },
});
