# mal-icons · React example

A Vite + React 19 icon gallery showcasing **`@mal-icons/react`**.

## What it demonstrates

- **Direct, tree-shakeable imports** — `import { FiActivity } from "@mal-icons/react/fi"`.
- **Context theming** — app-wide `size`, `color`, and `weight` via
  `IconContext.Provider`, with per-icon overrides.
- **Stroke weights** — `thin · light · regular · bold`.
- **Pure-CSS animations** — `ICON_ANIMATIONS_CSS` injected once, with
  `prefers-reduced-motion` respected automatically.
- **Live search** and copy-to-clipboard import snippets.

## Run

From the repository root (once):

```bash
bun install
bun run build
```

Then:

```bash
cd examples/react
bun install
bun run dev
```

Open the printed local URL.
