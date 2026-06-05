# mal-icon · Angular example

A Vite + Angular app (powered by the Analog Angular plugin) that renders the
shared mal-icon gallery with live controls for size, color, and animation.

It uses the `@mal-icon/angular` adapter — standalone components that build a
native `<svg>` with `Renderer2` (no `innerHTML`, no runtime string parsing).

## Run it

From the **repository root**, install and build the workspace once:

```bash
bun install
bun run build
```

Then start this app:

```bash
cd examples/angular
bun install
bun run dev
```

## What it shows

- `import { FiActivity } from "@mal-icon/angular/fi"` — tree-shakeable, ahead-of-time
  generated standalone components.
- Per-icon `@Input`s (`size`, `color`, `title`, `className`) wired reactively
  with Angular signals and `NgComponentOutlet` for the dynamic gallery.
- CSS animation presets applied via `className={animationClass("spin")}`, with
  `ICON_ANIMATIONS_CSS` injected once.
- Direct selector usage for the chrome icons, e.g. `<mal-fi-github [size]="18" />`.

> The `vite.config.ts` resolves `@mal-icon/*` to TypeScript source via the
> `"bun"` export condition so the example runs straight from the workspace. When
> consuming the published npm package you can delete that `resolve.conditions`
> block.
