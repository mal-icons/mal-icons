# mal-icon · Web Components example

A framework-free Vite app that renders the shared mal-icon gallery using the
`@mal-icon/web` adapter and its native `<mal-icon>` custom element.

There is no virtual DOM and no `innerHTML`: every icon is built with
`document.createElementNS`, so the markup is safe even for data loaded from an
untrusted CDN.

## Run it

From the **repository root**, install and build the workspace once:

```bash
bun install
bun run build
```

Then start this app:

```bash
cd examples/web
bun install
bun run dev
```

## What it shows

- `registerIcons({ FiActivity, … })` to seed the in-memory registry, then
  `defineMalIcon()` to register the `<mal-icon>` custom element.
- Declarative rendering: `<mal-icon name="FiActivity" size="24" title="Activity">`.
- Live theming by setting `size`, `color`, `weight`, and `animate` attributes —
  the element re-renders through `attributeChangedCallback`.
- `ICON_ANIMATIONS_CSS` injected once to enable the CSS animation presets.
- `@mal-icon/web/fi` ships the icons as tree-shakeable serializable JSON data.

> The `vite.config.ts` resolves `@mal-icon/*` to TypeScript source via the
> `"bun"` export condition so the example runs straight from the workspace. When
> consuming the published npm package you can delete that `resolve.conditions`
> block.
