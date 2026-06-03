# mal-icons · Astro example

> **Stack:** Astro 5 (static, zero-JS) · [`@mal-icons/astro`](../../packages/astro)

A static, server-rendered Astro site that showcases the `@mal-icons/astro`
adapter. Every icon is a `.astro` component that emits a plain `<svg>` at build
time — **zero client-side JavaScript**.

Astro has no runtime theming context, so icons are themed entirely through their
own props (`size`, `color`, `title`, `class`), resolved during the build.

## What it demonstrates

- **One component per icon** — `import FiActivity from "@mal-icons/astro/fi/FiActivity.astro"`, tree-shaken by the bundler.
- **Prop-based theming** — `<FiHeart size={32} color="#f43f5e" title="Heart" />`.
- **Pure-CSS animations** — `class={animationClass("spin")}` with `ICON_ANIMATIONS_CSS` injected once into `<head>`.

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- Build the workspace packages once from the **repository root**:

  ```bash
  bun install
  bun run build
  ```

## Run

```bash
cd examples/astro
bun install
bun run dev
```

Open the printed local URL (e.g. <http://localhost:4321>).

### Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `bun run dev`     | Start the Astro dev server           |
| `bun run build`   | Build the static site to `dist/`     |
| `bun run preview` | Preview the production build locally |

## Project structure

```
examples/astro/
├─ astro.config.mjs    # resolves @mal-icons/* to source (dev only)
└─ src/
   ├─ pages/
   │  └─ index.astro   # the gallery page
   └─ styles/
      └─ styles.css
```

## How theming works

```astro
---
import FiHeart from "@mal-icons/astro/fi/FiHeart.astro";
import { animationClass, ICON_ANIMATIONS_CSS } from "@mal-icons/core";
---

<style is:inline set:html={ICON_ANIMATIONS_CSS}></style>

<FiHeart size={32} color="#f43f5e" title="Heart" />
<FiHeart class={animationClass("pulse")} />
```

## Using it in your own app

`astro.config.mjs` resolves `@mal-icons/*` to source via the `"bun"` export
condition so the example runs from the workspace. When consuming the published
npm package, delete that `vite.resolve.conditions` block.

## Learn more

- Adapter API → [`@mal-icons/astro`](../../packages/astro)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
