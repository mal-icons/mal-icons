# mal-icons · Svelte example

A Vite + Svelte 5 icon gallery showcasing **`@mal-icons/svelte`**.

## What it demonstrates

- **Precompiled per-icon components** — `import { FiActivity } from "@mal-icons/svelte/fi"`.
- **Context theming** — app-wide `size` and `color` via `setIconContext`.
- **Svelte 5 runes** — `$state` / `$derived` drive the controls and search.

> The library resolves theming when an icon initialises, so this demo re-keys
> the grid (`{#key …}`) to re-apply size/color changes to mounted icons. Per-icon
> props (e.g. `size`, `color`, `title`) can also be passed directly.

## Run

From the repository root (once):

```bash
bun install
bun run build
```

Then:

```bash
cd examples/svelte
bun install
bun run dev
```

Open the printed local URL.
