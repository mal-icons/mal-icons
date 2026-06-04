# mal-icons · Preact example

> **Stack:** Vite 6 · Preact 10 · TypeScript · [`@mal-icons/preact`](../../packages/preact)

The shared mal-icons gallery on Preact's lighter runtime, with live controls for
size, color, stroke weight, and animation. It mirrors the React example but uses
the `@mal-icons/preact` adapter — same context-based theming API, same per-icon
overrides.

## What it demonstrates

- **Tree-shakeable imports** — `import { FiActivity } from "@mal-icons/preact/fi"`.
- **Context theming** — `<IconContext.Provider value={{ size, color }}>` for app-wide defaults.
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
cd examples/preact
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
examples/preact/
├─ index.html
├─ vite.config.ts      # resolves @mal-icons/* to source (dev only)
└─ src/
   ├─ main.tsx         # Preact root
   ├─ App.tsx          # gallery UI, controls, search
   ├─ icons.ts         # curated icon list
   └─ styles.css
```

## How theming works

```tsx
import { IconContext } from "@mal-icons/preact";
import { FiActivity } from "@mal-icons/preact/fi";

<IconContext.Provider value={{ size: 24, color: "#3366ff" }}>
  <FiActivity /> {/* inherits context */}
  <FiActivity weight="bold" animate="spin" /> {/* per-icon override */}
</IconContext.Provider>;
```

## Using it in your own app

The `vite.config.ts` resolves `@mal-icons/*` to TypeScript source via the
`"bun"` export condition so the example runs from the workspace. When consuming
the published npm package, delete that `resolve.conditions` block.

## Learn more

- Adapter API → [`@mal-icons/preact`](../../packages/preact)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
