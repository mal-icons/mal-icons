# mal-icon · Next.js example

A Next.js App Router app showing **`@mal-icon/react`** in both server and client
contexts.

## What it demonstrates

- **React Server Components** — the hero icons are rendered with
  `createServerIcon` from `@mal-icon/react/server`, shipping **zero client JS**.
- **Client island** — the interactive gallery is a `"use client"` component that
  uses `IconContext` for theming.
- **`transpilePackages`** — `next.config.mjs` lets Next compile the workspace
  `@mal-icon/*` packages.

## Run

From the repository root (once):

```bash
bun install
bun run build
```

Then:

```bash
cd examples/nextjs
bun install
bun run dev
```

Open http://localhost:3000.
