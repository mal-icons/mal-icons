# mal-icon · Vue example

A Vite + Vue 3.5 icon gallery showcasing **`@mal-icon/vue`**.

## What it demonstrates

- **Direct, tree-shakeable imports** — `import { FiActivity } from "@mal-icon/vue/fi"`.
- **Context theming** — app-wide `size` and `color` via `provideIconContext`
  with a reactive context object; per-icon props still override.
- **Live search** over a curated Feather set.

## Run

From the repository root (once):

```bash
bun install
bun run build
```

Then:

```bash
cd examples/vue
bun install
bun run dev
```

Open the printed local URL.
