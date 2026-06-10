# mal-icons · Angular example

> **Stack:** Vite 7 · Angular 22 (JIT) · TypeScript · [`@mal-icons/angular`](../../packages/angular)

The shared mal-icons gallery on Angular, with live controls for size, color, and
animation. It uses standalone components that build a native `<svg>` with
`Renderer2` — no `innerHTML`, no runtime string parsing.

## What it demonstrates

- **Tree-shakeable standalone components** — `import { FiActivity } from "@mal-icons/angular/fi"`.
- **Reactive inputs** — `size`, `color`, `title`, `className` wired with Angular signals.
- **Dynamic gallery** — `NgComponentOutlet` renders the grid from data.
- **Selector usage** — e.g. `<mal-fi-github [size]="18" />` for chrome icons.
- **Pure-CSS animations** — `className={animationClass("spin")}` with `ICON_ANIMATIONS_CSS` injected once.

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- Build the workspace packages once from the **repository root**:

  ```bash
  bun install
  bun run build
  ```

## Run

```bash
cd examples/angular
bun install
bun run dev
```

Open the printed local URL (e.g. <http://localhost:5173>).

### Scripts

| Script            | Description                             |
| ----------------- | --------------------------------------- |
| `bun run dev`     | Start the Vite dev server (Angular JIT) |
| `bun run build`   | Production build                        |
| `bun run preview` | Preview the production build locally    |

## Project structure

```
examples/angular/
├─ index.html
├─ vite.config.ts      # resolves @mal-icons/* to source (dev only)
└─ src/
   ├─ main.ts          # bootstrapApplication
   └─ app/
      ├─ app.component.ts  # gallery UI, signals, controls
      └─ icons.ts          # curated icon list
```

## How theming works

Use a standalone icon by importing it and placing its selector in the template:

```ts
import { Component } from "@angular/core";
import { FiActivity } from "@mal-icons/angular/fi";

@Component({
  standalone: true,
  selector: "app-status",
  imports: [FiActivity],
  template: `<mal-fi-activity [size]="24" color="#3366ff" title="Status" />`,
})
export class StatusComponent {}
```

Provide app-wide defaults with the `ICON_CONTEXT` token:

```ts
import { ICON_CONTEXT } from "@mal-icons/angular";

bootstrapApplication(AppComponent, {
  providers: [
    { provide: ICON_CONTEXT, useValue: { size: 20, color: "#3366ff" } },
  ],
});
```

## Using it in your own app

The `vite.config.ts` resolves `@mal-icons/*` to TypeScript source via the
`"bun"` export condition so the example runs from the workspace. When consuming
the published npm package, delete that `resolve.conditions` block.

## Learn more

- Adapter API → [`@mal-icons/angular`](../../packages/angular)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
