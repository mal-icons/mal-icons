# mal-icons · Nuxt example

> **Stack:** Nuxt 3 (SSR) · Vue 3.5 · TypeScript · [`@mal-icons/vue`](../../packages/vue)

A Nuxt 3 app showing `@mal-icons/vue` rendered with server-side rendering (SSR)
and themed through Vue's provide/inject.

## What it demonstrates

- **Server-side rendering** — every icon is emitted on the server as native `<svg>` markup (no `v-html`, no runtime JSON parsing) and then hydrated, so the hero is visible before any client JavaScript runs.
- **SSR-safe state** — the size/color/search controls use Nuxt's `useState`, so server and client render the same values without a hydration mismatch.
- **Context theming** — app-wide `size` and `color` via `provideIconContext` with a reactive context object; per-icon props still override.
- **Source resolution** — `nuxt.config.ts` aliases the workspace `@mal-icons/*` packages to their TypeScript source (client and server), so the example runs without pre-building the libraries.

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- Build the workspace packages once from the **repository root**:

  ```bash
  bun install
  bun run build
  ```

## Run

```bash
cd examples/nuxt
bun install
bun run dev
```

Open <http://localhost:3000>.

### Scripts

| Script             | Description                     |
| ------------------ | ------------------------------- |
| `bun run dev`      | Start the Nuxt dev server (SSR) |
| `bun run build`    | Build for a Node server         |
| `bun run generate` | Pre-render a fully static site  |
| `bun run preview`  | Preview the production build    |

## Project structure

```
examples/nuxt/
├─ nuxt.config.ts      # aliases @mal-icons/* to source (client + server)
├─ app.vue             # gallery UI, SSR-safe controls (useState)
├─ icons.ts            # curated icon list
└─ assets/css/styles.css
```

## Learn more

- Adapter API → [`@mal-icons/vue`](../../packages/vue)
- SPA variant → [`examples/vue`](../vue)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
