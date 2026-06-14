# @mal-icons/preact

[![npm](https://img.shields.io/npm/v/@mal-icons/preact.svg)](https://www.npmjs.com/package/@mal-icons/preact)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

Preact adapter for [**mal-icons**](https://github.com/mal-icons/mal-icons) — a
high-performance, tree-shakeable icon SDK. Each icon is a pre-generated Preact
component that renders plain SVG, with no runtime parsing.

## Highlights

- **Tree-shakeable** — every icon is its own module.
- **Tiny** — strict per-icon size budget; ideal for size-sensitive Preact apps.
- **Themeable** — `IconContext` provider with per-icon overrides.
- **Pure-CSS animations** — `spin`, `pulse`, `beat`, `bounce`, `ping`, `shake`, `wiggle`, `float`, `heartbeat`, `flip`, `rotate`, `zoom`, `fade`, `slide`, `glow`, `swing`, `tada`, with a `prefers-reduced-motion` guard.
- **Accessible** — correct `role` / `aria-hidden` and optional `<title>`.

## Installation

```bash
bun add @mal-icons/preact
# or
npm install @mal-icons/preact
```

> Requires Preact 10 or newer (peer dependency).

## Use with AI agents

AI coding agents can add and theme these icons for you via the
[`mal-icons` agent skill](../../skills/mal-icons). Install it with the
[`skills` CLI](https://www.npmjs.com/package/skills):

```bash
npx skills add mal-icons/mal-icons
```

Then ask your agent to "add a trash icon" and it searches the catalog and writes
the correct `@mal-icons/preact` import. See the
[Preact setup guide](../../skills/mal-icons/references/setup/preact.md).

## Quick start

```tsx
import { FiActivity } from "@mal-icons/preact/fi";

export function Status() {
  return <FiActivity size={24} title="Status" />;
}
```

### App-wide theming

```tsx
import { IconContext } from "@mal-icons/preact";

<IconContext.Provider value={{ size: 20, color: "#3366ff" }}>
  <App />
</IconContext.Provider>;
```

Per-icon props always override context values.

## Props

| Prop             | Type                                                                           | Description                                          |
| ---------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `size`           | `number \| string`                                                             | Width and height (defaults to `1em`)                 |
| `color`          | `string`                                                                       | Overrides `currentColor`                             |
| `weight`         | `"thin" \| "light" \| "regular" \| "bold"`                                     | Stroke weight for stroke-based sets                  |
| `animate`        | `IconAnimation` (`"spin"`, `"pulse"`, `"bounce"`, `"shake"`, `"heartbeat"`, …) | CSS animation preset                                 |
| `secondaryColor` | `string`                                                                       | Multi-tone color, exposed as `--mal-icons-secondary` |
| `title`          | `string`                                                                       | Accessible label                                     |
| `class`          | `string`                                                                       | Additional class names                               |

## Animations

```tsx
import { ICON_ANIMATIONS_CSS } from "@mal-icons/preact";

<style>{ICON_ANIMATIONS_CSS}</style>;
<FiLoader animate="spin" />;
```

## API

```ts
import {
  IconBase,
  createIcon,
  IconContext,
  DefaultIconContext,
  ICON_ANIMATIONS_CSS,
  WEIGHT_STROKE_WIDTH,
  animationClass,
} from "@mal-icons/preact";
```

## Icons

The bundled icon sets, their upstream licenses, pinned versions, and counts:

| Icon Library                             | License                                                                           | Version | Count |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ------- | ----: |
| [Circum Icons](https://circumicons.com/) | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE) | 2.0.2   |   288 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |
| [Font Awesome Free](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  1402 |
| [Font Awesome Free Brands](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  495 |
| [Font Awesome Free Regular](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  163 |
| [Ionicons](https://ionic.io/ionicons)    | [MIT license](https://github.com/ionic-team/ionicons/blob/main/LICENSE)           | 8.0.13  |  1357 |
| [Typicons](https://www.s-ings.com/typicons/) | [CC BY-SA 4.0 license](https://github.com/stephenhutchings/typicons.font/blob/master/LICENCE.md) | 2.1.2   |   336 |

## Subpath exports

| Import                            | Contents                          |
| --------------------------------- | --------------------------------- |
| `@mal-icons/preact`               | Adapter and context               |
| `@mal-icons/preact/ci`            | All Circum icons (named exports)  |
| `@mal-icons/preact/ci/CiHeart`    | A single Circum icon module       |
| `@mal-icons/preact/fa`            | All Font Awesome icons (named exports) |
| `@mal-icons/preact/fab`            | All Font Awesome Brands icons (named exports) |
| `@mal-icons/preact/far`            | All Font Awesome Regular icons (named exports) |
| `@mal-icons/preact/fi`            | All Feather icons (named exports) |
| `@mal-icons/preact/fa/FaHeart` | A single icon module              |
| `@mal-icons/preact/fab/FabGithub` | A single icon module              |
| `@mal-icons/preact/far/FarHeart` | A single icon module              |
| `@mal-icons/preact/fi/FiActivity` | A single icon module              |
| `@mal-icons/preact/io`            | All Ionicons (named exports)      |
| `@mal-icons/preact/io/IoHeart`    | A single Ionicons icon module     |
| `@mal-icons/preact/ti`            | All Typicons (named exports)      |
| `@mal-icons/preact/ti/TiHeart`    | A single Typicons icon module     |

## Example

A Vite + Preact 10 gallery lives in
[`examples/preact`](https://github.com/mal-icons/mal-icons/tree/main/examples/preact).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/preact`](https://github.com/mal-icons/mal-icons/tree/main/packages/preact).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
