# mal-icons · Solid example

A Vite + SolidJS app that renders the shared mal-icons gallery with live controls
for size, color, stroke weight, and animation.

It uses the `@mal-icons/solid` adapter — fine-grained reactive theming through
`<IconContext.Provider>` with per-icon overrides.

## Run it

From the **repository root**, install and build the workspace once:

```bash
bun install
bun run build
```

Then start this app:

```bash
cd examples/solid
bun install
bun run dev
```

## What it shows

- `import { FiActivity } from "@mal-icons/solid/fi"` — tree-shakeable, ahead-of-time
  generated components.
- `<IconContext.Provider value={{ size, color }}>` for app-wide, reactive theming.
- Per-icon `weight`, `animate`, and `title` props overriding the context.
- `ICON_ANIMATIONS_CSS` injected once to enable the CSS animation presets.

> `vite-plugin-solid` adds the `"solid"` export condition, which resolves
> `@mal-icons/solid` to TypeScript source so the example runs straight from the
> workspace. When consuming the published npm package you can delete the
> `resolve.conditions` block in `vite.config.ts`.
