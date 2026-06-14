# @mal-icons/solid

[![npm](https://img.shields.io/npm/v/@mal-icons/solid.svg)](https://www.npmjs.com/package/@mal-icons/solid)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

SolidJS adapter for [**mal-icons**](https://github.com/mal-icons/mal-icons) — a
high-performance, tree-shakeable icon SDK. Each icon is a pre-generated Solid
component with fine-grained reactivity and no runtime parsing.

## Highlights

- **Fine-grained reactivity** — built on Solid's `mergeProps` / `useContext`.
- **Tree-shakeable** — every icon is its own module.
- **Themeable** — `IconContext` provider with per-icon overrides.
- **Pure-CSS animations** — `spin`, `pulse`, `beat`, `bounce`, `ping`, `shake`, `wiggle`, `float`, `heartbeat`, `flip`, `rotate`, `zoom`, `fade`, `slide`, `glow`, `swing`, `tada`, with a `prefers-reduced-motion` guard.
- **Accessible** — correct `role` / `aria-hidden` and optional `<title>`.

## Installation

```bash
bun add @mal-icons/solid
# or
npm install @mal-icons/solid
```

> Requires `solid-js` 1.8 or newer (peer dependency).

## Use with AI agents

AI coding agents can add and theme these icons for you via the
[`mal-icons` agent skill](../../skills/mal-icons). Install it with the
[`skills` CLI](https://www.npmjs.com/package/skills):

```bash
npx skills add mal-icons/mal-icons
```

Then ask your agent to "add a trash icon" and it searches the catalog and writes
the correct `@mal-icons/solid` import. See the
[Solid setup guide](../../skills/mal-icons/references/setup/solid.md).

## Quick start

```tsx
import { FiActivity } from "@mal-icons/solid/fi";

export function Status() {
  return <FiActivity size={24} title="Status" />;
}
```

### App-wide theming

```tsx
import { IconContext } from "@mal-icons/solid";

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
import { ICON_ANIMATIONS_CSS } from "@mal-icons/solid";

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
} from "@mal-icons/solid";
```

## Icons

The bundled icon sets, their upstream licenses, pinned versions, and counts:

| Icon Library                             | License                                                                           | Version | Count |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ------- | ----: |
| [Ant Design Icons](https://ant.design/components/icon) | [MIT license](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE) | 4.0.0   |   420 |
| [Circum Icons](https://circumicons.com/) | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE) | 2.0.2   |   288 |
| [Devicons](https://devicons.io/)         | [MIT license](https://github.com/vorillaz/devicons/blob/main/LICENSE)             | 2.0.1   |  1725 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |
| [Font Awesome Free](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  1402 |
| [Font Awesome Free Brands](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  495 |
| [Font Awesome Free Regular](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  163 |
| [Ionicons](https://ionic.io/ionicons)    | [MIT license](https://github.com/ionic-team/ionicons/blob/main/LICENSE)           | 8.0.13  |  1357 |
| [Octicons](https://primer.style/octicons/) | [MIT license](https://github.com/primer/octicons/blob/main/LICENSE) | 19.28.1 |   733 |
| [Typicons](https://www.s-ings.com/typicons/) | [CC BY-SA 4.0 license](https://github.com/stephenhutchings/typicons.font/blob/master/LICENCE.md) | 2.1.2   |   336 |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | [SIL OFL 1.1 license](https://github.com/erikflowers/weather-icons/blob/master/README.md#licensing) | 2.0.12  |   219 |

## Subpath exports

| Import                           | Contents                          |
| -------------------------------- | --------------------------------- |
| `@mal-icons/solid`               | Adapter and context               |
| `@mal-icons/solid/ad`            | All Ant Design icons (named exports)  |
| `@mal-icons/solid/ci`            | All Circum icons (named exports)  |
| `@mal-icons/solid/dev`            | All Devicons icons (named exports)  |
| `@mal-icons/solid/ad/AdHome`    | A single Ant Design icon module       |
| `@mal-icons/solid/ci/CiHeart`    | A single Circum icon module       |
| `@mal-icons/solid/dev/DevDreamhost`    | A single Devicons icon module       |
| `@mal-icons/solid/fa`            | All Font Awesome icons (named exports) |
| `@mal-icons/solid/fab`            | All Font Awesome Brands icons (named exports) |
| `@mal-icons/solid/far`            | All Font Awesome Regular icons (named exports) |
| `@mal-icons/solid/fi`            | All Feather icons (named exports) |
| `@mal-icons/solid/fa/FaHeart` | A single icon module              |
| `@mal-icons/solid/fab/FabGithub` | A single icon module              |
| `@mal-icons/solid/far/FarHeart` | A single icon module              |
| `@mal-icons/solid/fi/FiActivity` | A single icon module              |
| `@mal-icons/solid/io`            | All Ionicons (named exports)      |
| `@mal-icons/solid/oc`            | All Octicons (named exports)      |
| `@mal-icons/solid/io/IoHeart`    | A single Ionicons icon module     |
| `@mal-icons/solid/oc/OcHeart16`    | A single Octicons icon module     |
| `@mal-icons/solid/ti`            | All Typicons (named exports)      |
| `@mal-icons/solid/wi`            | All Weather Icons (named exports) |
| `@mal-icons/solid/ti/TiHeart`    | A single Typicons icon module     |
| `@mal-icons/solid/wi/WiDaySunny` | A single Weather Icons icon module |

## Example

A Vite + SolidJS 1.9 gallery (signals + provider) lives in
[`examples/solid`](https://github.com/mal-icons/mal-icons/tree/main/examples/solid).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/solid`](https://github.com/mal-icons/mal-icons/tree/main/packages/solid).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
