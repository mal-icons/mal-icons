# mal-icons · Solid example

> **Stack:** Vite 6 · SolidJS 1.9 · TypeScript · [`@mal-icons/solid`](../../packages/solid)

The shared mal-icons gallery on SolidJS, with live controls for size, color,
stroke weight, and animation. Theming flows through `<IconContext.Provider>`
with Solid's fine-grained reactivity, and per-icon props override.

## What it demonstrates

- **Tree-shakeable imports** — `import { FiActivity } from "@mal-icons/solid/fi"`.
- **Reactive context theming** — `<IconContext.Provider value={{ size, color }}>`.
- **Per-icon overrides** — `weight`, `animate`, and `title` props beat the context.
- **Pure-CSS animations** — `ICON_ANIMATIONS_CSS` injected once.

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- Build the workspace packages once from the **repository root**:

  ```bash
  bun install
  bun run build
  ```

## Run

```bash
cd examples/solid
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
examples/solid/
├─ index.html
├─ vite.config.ts      # vite-plugin-solid + source resolution (dev only)
└─ src/
   ├─ main.tsx         # Solid render root
   ├─ App.tsx          # gallery UI, controls, search
   ├─ icons.ts         # curated icon list
   └─ styles.css
```

## How theming works

```tsx
import { createSignal } from "solid-js";
import { IconContext } from "@mal-icons/solid";
import { FiActivity } from "@mal-icons/solid/fi";

const [size, setSize] = createSignal(24);

<IconContext.Provider value={{ size: size(), color: "#3366ff" }}>
  <FiActivity /> {/* inherits context */}
  <FiActivity weight="bold" animate="spin" /> {/* per-icon override */}
</IconContext.Provider>;
```

## Using it in your own app

`vite-plugin-solid` adds the `"solid"` export condition, which resolves
`@mal-icons/solid` to TypeScript source so the example runs from the workspace.
When consuming the published npm package, delete the `resolve.conditions` block
in `vite.config.ts`.

## Learn more

- Adapter API → [`@mal-icons/solid`](../../packages/solid)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
