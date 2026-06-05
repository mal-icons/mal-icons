# mal-icon · Astro example

A static, server-rendered Astro site that showcases the `@mal-icon/astro`
adapter. Every icon is a `.astro` component that emits a plain `<svg>` at build
time — **zero client-side JavaScript**.

Astro has no runtime theming context, so icons are themed entirely through their
own props (`size`, `color`, `title`, `class`), resolved during the build.

## Run it

From the **repository root**, install and build the workspace once:

```bash
bun install
bun run build
```

Then start this app:

```bash
cd examples/astro
bun install
bun run dev
```

## What it shows

- `import FiActivity from "@mal-icon/astro/fi/FiActivity.astro"` — one component
  per icon, tree-shaken by the bundler.
- Prop-based theming: `<FiHeart size={32} color="#f43f5e" title="Heart" />`.
- CSS animation presets applied via `class={animationClass("spin")}`, with
  `ICON_ANIMATIONS_CSS` injected once into `<head>`.

> `astro.config.mjs` resolves `@mal-icon/*` to source via the `"bun"` export
> condition so the example runs straight from the workspace. When consuming the
> published npm packages you can delete that `vite.resolve.conditions` block.
