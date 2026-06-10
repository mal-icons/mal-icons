# mal-icons · Web Components example

> **Stack:** Vite 6 · Vanilla TypeScript · Web Components · [`@mal-icons/web`](../../packages/web)

A framework-free app that renders the shared mal-icons gallery using the
`@mal-icons/web` adapter and its native `<mal-icons>` custom element.

There is no virtual DOM and no `innerHTML`: every icon is built with
`document.createElementNS`, so the markup is safe even for data loaded from an
untrusted CDN.

## What it demonstrates

- **Registry + custom element** — `registerIcons({ FiActivity, … })` to seed the in-memory registry, then `defineMalIcon()` to register `<mal-icons>`.
- **Declarative rendering** — `<mal-icons name="FiActivity" size="24" title="Activity">`.
- **Live theming** — set `size`, `color`, `weight`, and `animate` attributes; the element re-renders via `attributeChangedCallback`.
- **Pure-CSS animations** — `ICON_ANIMATIONS_CSS` injected once.
- **Serializable data** — `@mal-icons/web/fi` ships icons as tree-shakeable JSON.

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- Build the workspace packages once from the **repository root**:

  ```bash
  bun install
  bun run build
  ```

## Run

```bash
cd examples/web
bun install
bun run dev
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
examples/web/
├─ index.html
├─ vite.config.ts      # resolves @mal-icons/* to source (dev only)
└─ src/
   ├─ main.ts          # registerIcons + defineMalIcon + controls
   ├─ icons.ts         # curated icon list
   └─ styles.css
```

## How it works

```ts
import { defineMalIcon, registerIcons } from "@mal-icons/web";
import { fi } from "@mal-icons/web/fi";

registerIcons(fi); // seed the registry
defineMalIcon(); // register <mal-icons>
```

```html
<mal-icons
  name="FiActivity"
  size="24"
  color="#3366ff"
  title="Activity"
></mal-icons>
```

## Using it in your own app

The `vite.config.ts` resolves `@mal-icons/*` to TypeScript source via the
`"bun"` export condition so the example runs from the workspace. When consuming
the published npm package, delete that `resolve.conditions` block.

## Learn more

- Adapter API → [`@mal-icons/web`](../../packages/web)
- No-build sprite variant → [`examples/cdn-sprite`](../cdn-sprite)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
