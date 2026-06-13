# Setup — Angular (`@mal-icons/angular`)

Angular adapter. Each icon is a pre-generated **standalone** component rendering
SVG through `Renderer2` with `OnPush` change detection. The package ships
TypeScript source, so it compiles in your app's Angular version.

## Install

```bash
bun add @mal-icons/angular
# or
npm install @mal-icons/angular
```

> Peer dependency: `@angular/core >=16`.

## Quick start

Import the standalone component and use its selector. The selector is the
kebab-cased icon name prefixed with `mal-` (e.g. `FiActivity` →
`<mal-fi-activity>`):

```ts
import { Component } from "@angular/core";
import { FiActivity } from "@mal-icons/angular/fi";

@Component({
  standalone: true,
  selector: "app-status",
  imports: [FiActivity],
  template: `<mal-fi-activity [size]="24" title="Status" />`,
})
export class StatusComponent {}
```

## Import styles

```ts
import FiSearch from "@mal-icons/angular/fi/FiSearch"; // per-icon (default only)
import { FiSearch } from "@mal-icons/angular/fi"; // set barrel (named)
import { FiSearch } from "@mal-icons/angular"; // package root (named)
```

## Inputs

| Input       | Type               | Notes                    |
| ----------- | ------------------ | ------------------------ |
| `size`      | `number \| string` | Default `1em`            |
| `color`     | `string`           | Overrides `currentColor` |
| `title`     | `string`           | a11y label               |
| `className` | `string`           | Extra classes            |

## App-wide theming

Provide `ICON_CONTEXT`; per-icon inputs override it:

```ts
import { ICON_CONTEXT } from "@mal-icons/angular";

bootstrapApplication(AppComponent, {
  providers: [
    { provide: ICON_CONTEXT, useValue: { size: 20, color: "#3366ff" } },
  ],
});
```

## Pitfalls

- Add the icon class to the component's `imports` array (standalone) before
  using its selector.
- The selector is `mal-<kebab-name>`, not the PascalCase class name.
- `.../fi/` trailing slash → "Module not found".
- CSS `animate`/`secondaryColor` presets are DOM-CSS features; inject
  `ICON_ANIMATIONS_CSS` globally if you use them.
