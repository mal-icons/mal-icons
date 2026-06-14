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

## Use with AI agents

AI coding agents can add and theme these icons for you via the
[`mal-icons` agent skill](../../skills/mal-icons). Install it with the
[`skills` CLI](https://www.npmjs.com/package/skills):

```bash
npx skills add mal-icons/mal-icons
```

Then ask your agent to "add a trash icon" and it searches the catalog and writes
the correct `@mal-icons/angular` import. See the
[Angular setup guide](../../skills/mal-icons/references/setup/angular.md).

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
| [Ant Design Icons](https://ant.design/components/icon) | [MIT license](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE) | 4.0.0   |   420 |
| [Circum Icons](https://circumicons.com/) | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE) | 2.0.2   |   288 |
| [Devicons](https://devicons.io/)         | [MIT license](https://github.com/vorillaz/devicons/blob/main/LICENSE)             | 2.0.1   |  1725 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |
| [Flat Color Icons](https://icons8.github.io/flat-color-icons/) | [CC BY 4.0 license](https://github.com/icons8/flat-color-icons/blob/master/LICENSE.md) | 1.0.2   |   312 |
| [Font Awesome Free](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  1402 |
| [Font Awesome Free Brands](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  495 |
| [Font Awesome Free Regular](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  163 |
| [Ionicons](https://ionic.io/ionicons)    | [MIT license](https://github.com/ionic-team/ionicons/blob/main/LICENSE)           | 8.0.13  |  1357 |
| [Lucide](https://lucide.dev/icons/) | [ISC license](https://github.com/lucide-icons/lucide/blob/main/LICENSE) | 1.19.0  |  1727 |
| [Octicons](https://primer.style/octicons/) | [MIT license](https://github.com/primer/octicons/blob/main/LICENSE) | 19.28.1 |   733 |
| [Typicons](https://www.s-ings.com/typicons/) | [CC BY-SA 4.0 license](https://github.com/stephenhutchings/typicons.font/blob/master/LICENCE.md) | 2.1.2   |   336 |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | [SIL OFL 1.1 license](https://github.com/erikflowers/weather-icons/blob/master/README.md#licensing) | 2.0.12  |   219 |

## Subpath exports

| Import                             | Contents                       |
| ---------------------------------- | ------------------------------ |
| `@mal-icons/angular`               | Base component and context     |
| `@mal-icons/angular/ad`            | All Ant Design icon components |
| `@mal-icons/angular/ci`            | All Circum icon components     |
| `@mal-icons/angular/dev`            | All Devicons icon components     |
| `@mal-icons/angular/ad/AdHome`    | A single Ant Design icon component |
| `@mal-icons/angular/ci/CiHeart`    | A single Circum icon component |
| `@mal-icons/angular/dev/DevDreamhost`    | A single Devicons icon component |
| `@mal-icons/angular/fa`            | All Font Awesome icon components    |
| `@mal-icons/angular/fab`            | All Font Awesome Brands icon components    |
| `@mal-icons/angular/far`            | All Font Awesome Regular icon components    |
| `@mal-icons/angular/fc`            | All Flat Color icon components    |
| `@mal-icons/angular/fi`            | All Feather icon components    |
| `@mal-icons/angular/fa/FaHeart` | A single icon component        |
| `@mal-icons/angular/fab/FabGithub` | A single icon component        |
| `@mal-icons/angular/far/FarHeart` | A single icon component        |
| `@mal-icons/angular/fc/FcAbout` | A single icon component        |
| `@mal-icons/angular/fi/FiActivity` | A single icon component        |
| `@mal-icons/angular/io`            | All Ionicons components        |
| `@mal-icons/angular/lu`            | All Lucide components          |
| `@mal-icons/angular/oc`            | All Octicons components        |
| `@mal-icons/angular/io/IoHeart`    | A single Ionicons component    |
| `@mal-icons/angular/lu/LuHeart`    | A single Lucide component      |
| `@mal-icons/angular/oc/OcHeart16`    | A single Octicons component    |
| `@mal-icons/angular/ti`            | All Typicons components        |
| `@mal-icons/angular/wi`            | All Weather Icons components   |
| `@mal-icons/angular/ti/TiHeart`    | A single Typicons component    |
| `@mal-icons/angular/wi/WiDaySunny` | A single Weather Icons component |

## Example

A Vite + Angular 22 gallery (standalone components, signals,
`NgComponentOutlet`) lives in
[`examples/angular`](https://github.com/mal-icons/mal-icons/tree/main/examples/angular).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/angular`](https://github.com/mal-icons/mal-icons/tree/main/packages/angular).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
