# mal-icons · React example

> **Stack:** Vite 6 · React 19 · TypeScript · [`@mal-icons/react`](../../packages/react)

A polished, interactive icon gallery that demonstrates everything the React
adapter offers — direct tree-shakeable imports, context theming, stroke
weights, pure-CSS animations, and live search.

## What it demonstrates

- **Direct, tree-shakeable imports** — `import { FiActivity } from "@mal-icons/react/fi"`; the bundler keeps only the icons you use.
- **Context theming** — app-wide `size`, `color`, and `weight` via `IconContext.Provider`, with per-icon overrides.
- **Stroke weights** — `thin · light · regular · bold`.
- **Pure-CSS animations** — `ICON_ANIMATIONS_CSS` injected once; `prefers-reduced-motion` is respected automatically.
- **Live search** and copy-to-clipboard import snippets.

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- The workspace packages built once from the **repository root**:

  ```bash
  bun install
  bun run build
  ```

  `bun run build` emits the `dist/` bundles that Vite resolves through each
  package's `exports` map.

## Run

```bash
cd examples/react
bun install   # links the workspace @mal-icons/* packages
bun run dev   # start the Vite dev server
```

Open the printed local URL (e.g. <http://localhost:5173>).

### Scripts

| Script            | Description                                    |
| ----------------- | ---------------------------------------------- |
| `bun run dev`     | Start the Vite dev server with HMR             |
| `bun run build`   | Type-check (`tsc --noEmit`) + production build |
| `bun run preview` | Preview the production build locally           |

## Project structure

```
examples/react/
├─ index.html          # Vite entry HTML
├─ vite.config.ts      # resolves @mal-icons/* to source (dev only)
└─ src/
   ├─ main.tsx         # React root
   ├─ App.tsx          # gallery UI, controls, search
   ├─ icons.ts         # the curated icon list rendered in the grid
   └─ styles.css       # gradient hero + frosted controls
```

## How theming works

```tsx
import { IconContext } from "@mal-icons/react";
import { FiActivity } from "@mal-icons/react/fi";

<IconContext.Provider value={{ size: 24, color: "#3366ff", weight: "regular" }}>
  <FiActivity /> {/* inherits context */}
  <FiActivity size={48} weight="bold" /> {/* per-icon override */}
</IconContext.Provider>;
```

Enable animations once, anywhere in the tree:

```tsx
import { ICON_ANIMATIONS_CSS } from "@mal-icons/react";

<style>{ICON_ANIMATIONS_CSS}</style>;
<FiLoader animate="spin" />;
```

## Using it in your own app

This example resolves `@mal-icons/*` to TypeScript source via the `"bun"`
export condition in `vite.config.ts` so it runs straight from the workspace.
In a real app that installs the published package, **delete that
`resolve.conditions` block** — Vite picks the npm bundles automatically.

## Learn more

- Adapter API → [`@mal-icons/react`](../../packages/react)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
