# mal-icons · Svelte example

> **Stack:** Vite 6 · Svelte 5 · TypeScript · [`@mal-icons/svelte`](../../packages/svelte)

An icon gallery built with Svelte 5 runes that showcases the Svelte adapter —
precompiled per-icon components and context theming.

## What it demonstrates

- **Precompiled per-icon components** — `import { FiActivity } from "@mal-icons/svelte/fi"`.
- **Context theming** — app-wide `size` and `color` via `setIconContext`.
- **Svelte 5 runes** — `$state` / `$derived` drive the controls and search.

> The library resolves theming when an icon initialises, so this demo re-keys
> the grid (`{#key …}`) to re-apply size/color changes to mounted icons. Per-icon
> props (e.g. `size`, `color`, `title`) can also be passed directly.

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- Build the workspace packages once from the **repository root**:

  ```bash
  bun install
  bun run build
  ```

## Run

```bash
cd examples/svelte
bun install
bun run dev
```

Open the printed local URL (e.g. <http://localhost:5173>).

### Scripts

| Script            | Description                                    |
| ----------------- | ---------------------------------------------- |
| `bun run dev`     | Start the Vite dev server with HMR             |
| `bun run build`   | Type-check (`svelte-check`) + production build |
| `bun run preview` | Preview the production build locally           |

## Project structure

```
examples/svelte/
├─ index.html
├─ svelte.config.js
├─ vite.config.ts      # resolves @mal-icons/* to source (dev only)
└─ src/
   ├─ main.ts          # Svelte app bootstrap
   ├─ App.svelte       # gallery UI, controls, search
   ├─ icons.ts         # curated icon list
   └─ app.css
```

## How theming works

```svelte
<script lang="ts">
  import { setIconContext } from "@mal-icons/svelte";
  let size = $state(24);
  let color = $state("#3366ff");
  setIconContext({ size, color });
</script>
```

## Using it in your own app

The `vite.config.ts` resolves `@mal-icons/*` to source via the `"bun"`/`"svelte"`
export conditions so the example runs from the workspace. When consuming the
published npm package, delete that `resolve.conditions` block.

## Learn more

- Adapter API → [`@mal-icons/svelte`](../../packages/svelte)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
