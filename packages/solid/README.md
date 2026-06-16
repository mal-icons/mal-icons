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
| `multicolor` | `boolean` | Keep the icon's own colors (omits the `currentColor` `stroke`/`fill` defaults) |
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
| [Codicons](https://microsoft.github.io/vscode-codicons/) | [CC BY 4.0 license](https://github.com/microsoft/vscode-codicons/blob/main/LICENSE) | 0.0.46 | 604 |
| [css.gg](https://css.gg/) | [MIT license](https://github.com/astrit/css.gg/blob/master/license) | 2.1.1 | 704 |
| [Devicons](https://devicons.io/)         | [MIT license](https://github.com/vorillaz/devicons/blob/main/LICENSE)             | 2.0.1   |  1725 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |
| [Flat Color Icons](https://icons8.github.io/flat-color-icons/) | [CC BY 4.0 license](https://github.com/icons8/flat-color-icons/blob/master/LICENSE.md) | 1.0.2   |   312 |
| [Font Awesome Free](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  1402 |
| [Font Awesome Free Brands](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  495 |
| [Font Awesome Free Regular](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  163 |
| [Grommet](https://icons.grommet.io/) | [Apache 2.0 license](https://github.com/grommet/grommet-icons/blob/master/LICENSE) | 4.14.0  |   637 |
| [Heroicons](https://heroicons.com/) | [MIT license](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE) | 2.2.0 | 324 |
| [Ionicons](https://ionic.io/ionicons)    | [MIT license](https://github.com/ionic-team/ionicons/blob/main/LICENSE)           | 8.0.13  |  1357 |
| [Lucide](https://lucide.dev/icons/) | [ISC license](https://github.com/lucide-icons/lucide/blob/main/LICENSE) | 1.19.0  |  1727 |
| [Material Icons](https://fonts.google.com/icons) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Icons Filled](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Filled) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Icons Rounded](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Rounded) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Icons Sharp](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Sharp) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Icons Two Tone](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Two+tone) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Symbols Outlined](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Outlined) | [Apache 2.0 license](https://github.com/marella/material-symbols/blob/main/LICENSE) | 0.9.0 |  3004 |
| [Material Symbols Rounded](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Rounded) | [Apache 2.0 license](https://github.com/marella/material-symbols/blob/main/LICENSE) | 0.9.0 |  3004 |
| [Material Symbols Sharp](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Sharp) | [Apache 2.0 license](https://github.com/marella/material-symbols/blob/main/LICENSE) | 0.9.0 |  3004 |

| [Octicons](https://primer.style/octicons/) | [MIT license](https://github.com/primer/octicons/blob/main/LICENSE) | 19.28.1 |   733 |
| [Radix Icons](https://www.radix-ui.com/icons) | [MIT license](https://github.com/radix-ui/icons/blob/master/LICENSE) | 0.0.17 | 318 |
| [Simple Line Icons](https://simplelineicons.github.io/) | [MIT license](https://github.com/thesabbir/simple-line-icons/blob/master/LICENSE.md) | 2.5.5 | 189 |
| [Themify](https://themify.me/themify-icons) | [SIL OFL 1.1 license](https://github.com/lykmapipo/themify-icons/blob/master/README.md) | 9600186 | 352 |
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
| `@mal-icons/solid/fc`            | All Flat Color icons (named exports) |
| `@mal-icons/solid/fi`            | All Feather icons (named exports) |
| `@mal-icons/solid/gr`            | All Grommet icons (named exports) |
| `@mal-icons/solid/fa/FaHeart` | A single icon module              |
| `@mal-icons/solid/fab/FabGithub` | A single icon module              |
| `@mal-icons/solid/far/FarHeart` | A single icon module              |
| `@mal-icons/solid/fc/FcAbout` | A single icon module              |
| `@mal-icons/solid/fi/FiActivity` | A single icon module              |
| `@mal-icons/solid/gr/GrHome` | A single icon module              |
| `@mal-icons/solid/io`            | All Ionicons (named exports)      |
| `@mal-icons/solid/lu`            | All Lucide (named exports)        |
| `@mal-icons/solid/md`            | All Material Icons (named exports)        |
| `@mal-icons/solid/mdf` | All Material Icons Filled (named exports) |
| `@mal-icons/solid/mdr` | All Material Icons Rounded (named exports) |
| `@mal-icons/solid/mds` | All Material Icons Sharp (named exports) |
| `@mal-icons/solid/mdt` | All Material Icons Two Tone (named exports) |
| `@mal-icons/solid/mso` | All Material Symbols Outlined (named exports) |
| `@mal-icons/solid/msr` | All Material Symbols Rounded (named exports) |
| `@mal-icons/solid/mss` | All Material Symbols Sharp (named exports) |
| `@mal-icons/solid/oc`            | All Octicons (named exports)      |
| `@mal-icons/solid/io/IoHeart`    | A single Ionicons icon module     |
| `@mal-icons/solid/lu/LuHeart`    | A single Lucide icon module       |
| `@mal-icons/solid/md/MdFace`    | A single Material Icons icon module       |
| `@mal-icons/solid/oc/OcHeart16`    | A single Octicons icon module     |
| `@mal-icons/solid/ti`            | All Typicons (named exports)      |
| `@mal-icons/solid/wi`            | All Weather Icons (named exports) |
| `@mal-icons/solid/ti/TiHeart`    | A single Typicons icon module     |
| `@mal-icons/solid/wi/WiDaySunny` | A single Weather Icons icon module |
| `@mal-icons/solid/hi` | All Heroicons icons (named exports) |
| `@mal-icons/solid/hi/HiAcademicCap` | A single Heroicons icon module |
| `@mal-icons/solid/sl` | All Simple Line Icons icons (named exports) |
| `@mal-icons/solid/sl/SlActionRedo` | A single Simple Line Icons icon module |
| `@mal-icons/solid/cg` | All css.gg icons (named exports) |
| `@mal-icons/solid/cg/CgAbstract` | A single css.gg icon module |
| `@mal-icons/solid/vsc` | All Codicons icons (named exports) |
| `@mal-icons/solid/vsc/VscAccount` | A single Codicons icon module |
| `@mal-icons/solid/tf` | All Themify icons (named exports) |
| `@mal-icons/solid/tf/TfAgenda` | A single Themify icon module |
| `@mal-icons/solid/rx` | All Radix Icons icons (named exports) |
| `@mal-icons/solid/rx/RxAccessibility` | A single Radix Icons icon module |

## Example

A Vite + SolidJS 1.9 gallery (signals + provider) lives in
[`examples/solid`](https://github.com/mal-icons/mal-icons/tree/main/examples/solid).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/solid`](https://github.com/mal-icons/mal-icons/tree/main/packages/solid).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
