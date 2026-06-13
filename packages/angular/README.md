# @mal-icons/angular

[![npm](https://img.shields.io/npm/v/@mal-icons/angular.svg)](https://www.npmjs.com/package/@mal-icons/angular)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

Angular adapter for [**mal-icons**](https://github.com/mal-icons/mal-icons) — a
high-performance, tree-shakeable icon SDK. Each icon is a pre-generated
**standalone** Angular component that renders SVG through `Renderer2` with
`OnPush` change detection.

## Highlights

- **Standalone components** — import an icon directly, no `NgModule` needed.
- **`OnPush`** — minimal change-detection overhead.
- **Tree-shakeable** — every icon is its own component.
- **Themeable** — dependency-injection context (`ICON_CONTEXT`) with per-icon overrides.
- **Accessible** — correct `role` / `aria-hidden` and optional `<title>`.

## Installation

```bash
bun add @mal-icons/angular
# or
npm install @mal-icons/angular
```

> Requires `@angular/core` 16 or newer (peer dependency). The package ships
> TypeScript source, so it compiles in your app's Angular version.

## Quick start

Import the standalone component and use its selector in a template:

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

> The selector is the kebab-cased icon name prefixed with `mal-`
> (e.g. `FiActivity` → `<mal-fi-activity>`).

### App-wide theming

Provide `ICON_CONTEXT` to set defaults for all descendant icons; per-icon
inputs override them:

```ts
import { ICON_CONTEXT } from "@mal-icons/angular";

bootstrapApplication(AppComponent, {
  providers: [
    { provide: ICON_CONTEXT, useValue: { size: 20, color: "#3366ff" } },
  ],
});
```

## Inputs

| Input       | Type               | Description                          |
| ----------- | ------------------ | ------------------------------------ |
| `size`      | `number \| string` | Width and height (defaults to `1em`) |
| `color`     | `string`           | Overrides `currentColor`             |
| `title`     | `string`           | Accessible label                     |
| `className` | `string`           | Additional class names               |

## API

```ts
import {
  IconBaseComponent,
  ICON_CONTEXT,
  DefaultIconContext,
  ICON_ANIMATIONS_CSS,
  WEIGHT_STROKE_WIDTH,
  animationClass,
} from "@mal-icons/angular";
```

## Icons

The bundled icon sets, their upstream licenses, pinned versions, and counts:

| Icon Library                             | License                                                                           | Version | Count |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ------- | ----: |
| [Circum Icons](https://circumicons.com/) | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE) | 2.0.2   |   288 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |

## Subpath exports

| Import                             | Contents                       |
| ---------------------------------- | ------------------------------ |
| `@mal-icons/angular`               | Base component and context     |
| `@mal-icons/angular/ci`            | All Circum icon components     |
| `@mal-icons/angular/ci/CiHeart`    | A single Circum icon component |
| `@mal-icons/angular/fi`            | All Feather icon components    |
| `@mal-icons/angular/fi/FiActivity` | A single icon component        |

## Example

A Vite + Angular 22 gallery (standalone components, signals,
`NgComponentOutlet`) lives in
[`examples/angular`](https://github.com/mal-icons/mal-icons/tree/main/examples/angular).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/angular`](https://github.com/mal-icons/mal-icons/tree/main/packages/angular).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
