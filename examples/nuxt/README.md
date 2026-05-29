# mal-icon · Nuxt example

A Nuxt 3 app showing **`@mal-icon/vue`** rendered with server-side rendering
(SSR) and themed through Vue's provide/inject.

## What it demonstrates

- **Server-side rendering** — every icon is emitted on the server as native
  `<svg>` markup (no `v-html`, no runtime JSON parsing) and then hydrated, so the
  hero is visible before any client JavaScript runs.
- **SSR-safe state** — the size/color/search controls use Nuxt's `useState`, so
  the server and client render the same values without a hydration mismatch.
- **Context theming** — app-wide `size` and `color` via `provideIconContext`
  with a reactive context object; per-icon props still override.
- **Source resolution** — `nuxt.config.ts` aliases the workspace `@mal-icon/*`
  packages to their TypeScript source (client and server), so the example runs
  without pre-building the libraries.

## Run

From the repository root (once):

```bash
bun install
bun run build
```

Then:

```bash
cd examples/nuxt
bun install
bun run dev
```

Open http://localhost:3000.
