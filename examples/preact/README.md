# mal-icon · Preact example

A Vite + Preact app that renders the shared mal-icon gallery with live controls
for size, color, stroke weight, and animation.

It mirrors the React example, but uses Preact's lighter runtime and the
`@mal-icon/preact` adapter — same context-based theming API
(`<IconContext.Provider>`), same per-icon overrides.

## Run it

From the **repository root**, install and build the workspace once:

```bash
bun install
bun run build
```

Then start this app:

```bash
cd examples/preact
bun install
bun run dev
```

## What it shows

- `import { FiActivity } from "@mal-icon/preact/fi"` — tree-shakeable, ahead-of-time
  generated components.
- `<IconContext.Provider value={{ size, color }}>` for app-wide theming.
- Per-icon `weight`, `animate`, and `title` props overriding the context.
- `ICON_ANIMATIONS_CSS` injected once to enable the CSS animation presets.

> The `vite.config.ts` resolves `@mal-icon/*` to TypeScript source via the
> `"bun"` export condition so the example runs straight from the workspace. When
> consuming the published npm packages you can delete that `resolve.conditions`
> block.
