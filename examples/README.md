# mal-icons examples

Runnable, professionally-designed demo apps that show how to use **mal-icons**
across every supported framework. Each example renders the same icon gallery —
with live controls for size, color, stroke weight, and animation — so you can
compare the developer experience side by side.

| Example                          | Stack                          | Highlights                                              |
| -------------------------------- | ------------------------------ | ------------------------------------------------------- |
| [`react`](./react)               | Vite + React 19                | Context theming, weight/animation controls, copy-import |
| [`nextjs`](./nextjs)             | Next.js (App Router)           | React Server Components + a client island               |
| [`vue`](./vue)                   | Vite + Vue 3.5                 | `provideIconContext`, reactive controls                 |
| [`nuxt`](./nuxt)                 | Nuxt 3 (SSR)                   | Server-rendered icons + `useState` SSR-safe theming     |
| [`svelte`](./svelte)             | Vite + Svelte 5                | Runes, `setIconContext`, scoped styles                  |
| [`preact`](./preact)             | Vite + Preact 10               | `IconContext` provider, hooks, copy-import              |
| [`solid`](./solid)               | Vite + SolidJS 1.9             | Signals + `IconProvider`, fine-grained reactivity       |
| [`angular`](./angular)           | Vite + Angular 22 (JIT)        | Standalone components, signals, `NgComponentOutlet`     |
| [`web`](./web)                   | Vanilla TS + Web Components    | `<mal-icons>` custom element, `registerIcons`            |
| [`astro`](./astro)               | Astro 5 (static, zero-JS)      | `.astro` icon components rendered at build time         |
| [`react-native`](./react-native) | Expo + react-native-svg        | `IconContext` theming on native `<Svg>`                 |
| [`cdn-sprite`](./cdn-sprite)     | Plain HTML (no build, no deps) | SVG `<symbol>` sprite via `<use>`                        |

## Prerequisites

These examples consume the workspace packages directly. From the **repository
root**, install and build the libraries once:

```bash
bun install
bun run build
```

`bun run build` emits the `dist/` bundles that the framework bundlers (Vite,
Next.js) resolve through each package's `exports` map.

## Running an example

Each app is a standalone workspace. After the root build:

```bash
cd examples/react   # or nextjs / vue / nuxt / svelte / preact / solid / angular / web / astro
bun install         # links the workspace @mal-icons/* packages
bun run dev
```

The `cdn-sprite` example needs no build step — just open its `index.html` (or
serve the folder) after running `bun run build` at the root to generate the
sprite.

## Shared design language

All examples follow the same visual system — a gradient hero, a frosted
controls panel, and a responsive icon grid — implemented natively in each
framework so you can see idiomatic usage rather than a shared component layer.
