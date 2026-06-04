# mal-icons · Next.js example

> **Stack:** Next.js 15 (App Router) · React 19 · TypeScript · [`@mal-icons/react`](../../packages/react)

A Next.js App Router app showing `@mal-icons/react` in both **server** and
**client** contexts — zero-JS server-rendered icons plus an interactive client
island.

## What it demonstrates

- **React Server Components** — the hero icons render with `createServerIcon` from `@mal-icons/react/server`, shipping **zero client JS**.
- **Client island** — the interactive gallery is a `"use client"` component that uses `IconContext` for theming.
- **`transpilePackages`** — `next.config.mjs` lets Next compile the workspace `@mal-icons/*` packages.

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- Build the workspace packages once from the **repository root**:

  ```bash
  bun install
  bun run build
  ```

## Run

```bash
cd examples/nextjs
bun install
bun run dev
```

Open <http://localhost:3000>.

### Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `bun run dev`   | Start the Next.js dev server |
| `bun run build` | Production build             |
| `bun run start` | Serve the production build   |

## Project structure

```
examples/nextjs/
├─ next.config.mjs     # transpilePackages: @mal-icons/*
└─ app/
   ├─ layout.tsx       # root layout
   ├─ page.tsx         # server component: zero-JS hero icons
   ├─ Gallery.tsx      # "use client" interactive gallery
   ├─ icons.ts         # curated icon list
   └─ globals.css
```

## Server vs. client

```tsx
// page.tsx — Server Component, no client JS
import { createServerIcon } from "@mal-icons/react/server";

// Gallery.tsx — Client island
("use client");
import { IconContext } from "@mal-icons/react";
import { FiActivity } from "@mal-icons/react/fi";
```

## Learn more

- Adapter API → [`@mal-icons/react`](../../packages/react)
- SPA variant → [`examples/react`](../react)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
