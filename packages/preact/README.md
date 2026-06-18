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
| `multicolor` | `boolean` | Keep the icon's own colors (omits the `currentColor` `stroke`/`fill` defaults) |
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
| [Ant Design Icons](https://ant.design/components/icon) | [MIT license](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE) | 4.0.0   |   420 |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | [MIT license](https://github.com/twbs/icons/blob/main/LICENSE) | 1.13.1  |  2078 |
| [Circum Icons](https://circumicons.com/) | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE) | 2.0.2   |   288 |
| [Codicons](https://microsoft.github.io/vscode-codicons/) | [CC BY 4.0 license](https://github.com/microsoft/vscode-codicons/blob/main/LICENSE) | 0.0.46 | 604 |
| [css.gg](https://css.gg/) | [MIT license](https://github.com/astrit/css.gg/blob/master/license) | 2.1.1 | 704 |
| [Devicons](https://devicons.io/)         | [MIT license](https://github.com/vorillaz/devicons/blob/main/LICENSE)             | 2.0.1   |  1725 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |
| [Flat Color Icons](https://icons8.github.io/flat-color-icons/) | [CC BY 4.0 license](https://github.com/icons8/flat-color-icons/blob/master/LICENSE.md) | 1.0.2   |   312 |
| [Font Awesome Free](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  1402 |
| [Font Awesome Free Brands](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  495 |
| [Font Awesome Free Regular](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  163 |
| [Game Icons](https://game-icons.net/) | [CC BY 3.0 license](https://github.com/game-icons/icons/blob/master/license.txt) | 82d9488 | 4180 |
| [Grommet](https://icons.grommet.io/) | [Apache 2.0 license](https://github.com/grommet/grommet-icons/blob/master/LICENSE) | 4.14.0  |   637 |
| [Heroicons](https://heroicons.com/) | [MIT license](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE) | 2.2.0 | 324 |
| [Ionicons](https://ionic.io/ionicons)    | [MIT license](https://github.com/ionic-team/ionicons/blob/main/LICENSE)           | 8.0.13  |  1357 |
| [Lucide](https://lucide.dev/icons/) | [ISC license](https://github.com/lucide-icons/lucide/blob/main/LICENSE) | 1.19.0  |  1727 |
| [Material Icons Filled](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Filled) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Icons Rounded](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Rounded) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Icons Sharp](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Sharp) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Icons Two Tone](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Two+tone) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Symbols Outlined](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Outlined) | [Apache 2.0 license](https://github.com/marella/material-symbols/blob/main/LICENSE) | 0.9.0 |  3004 |
| [Material Symbols Rounded](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Rounded) | [Apache 2.0 license](https://github.com/marella/material-symbols/blob/main/LICENSE) | 0.9.0 |  3004 |
| [Material Symbols Sharp](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Sharp) | [Apache 2.0 license](https://github.com/marella/material-symbols/blob/main/LICENSE) | 0.9.0 |  3004 |

| [Octicons](https://primer.style/octicons/) | [MIT license](https://github.com/primer/octicons/blob/main/LICENSE) | 19.28.1 |   733 |
| [Radix Icons](https://www.radix-ui.com/icons) | [MIT license](https://github.com/radix-ui/icons/blob/master/LICENSE) | 0.0.17 | 318 |
| [Remix Icon](https://remixicon.com/) | [Apache 2.0 license](https://github.com/Remix-Design/RemixIcon/blob/master/License) | 4.6.0 | 3058 |
| [Simple Icons](https://simpleicons.org/) | [CC0 1.0 license](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md) | 16.23.0 | 3442 |
| [Simple Line Icons](https://simplelineicons.github.io/) | [MIT license](https://github.com/thesabbir/simple-line-icons/blob/master/LICENSE.md) | 2.5.5 | 189 |
| [Themify](https://themify.me/themify-icons) | [SIL OFL 1.1 license](https://github.com/lykmapipo/themify-icons/blob/master/README.md) | 9600186 | 352 |
| [Typicons](https://www.s-ings.com/typicons/) | [CC BY-SA 4.0 license](https://github.com/stephenhutchings/typicons.font/blob/master/LICENCE.md) | 2.1.2   |   336 |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | [SIL OFL 1.1 license](https://github.com/erikflowers/weather-icons/blob/master/README.md#licensing) | 2.0.12  |   219 |

## Subpath exports

| Import                            | Contents                          |
| --------------------------------- | --------------------------------- |
| `@mal-icons/preact`               | Adapter and context               |
| `@mal-icons/preact/ad`            | All Ant Design icons (named exports)  |
| `@mal-icons/preact/ci`            | All Circum icons (named exports)  |
| `@mal-icons/preact/dev`            | All Devicons icons (named exports)  |
| `@mal-icons/preact/ad/AdHome`    | A single Ant Design icon module       |
| `@mal-icons/preact/ci/CiHeart`    | A single Circum icon module       |
| `@mal-icons/preact/dev/DevDreamhost`    | A single Devicons icon module       |
| `@mal-icons/preact/fa`            | All Font Awesome icons (named exports) |
| `@mal-icons/preact/fab`            | All Font Awesome Brands icons (named exports) |
| `@mal-icons/preact/far`            | All Font Awesome Regular icons (named exports) |
| `@mal-icons/preact/fc`            | All Flat Color icons (named exports) |
| `@mal-icons/preact/fi`            | All Feather icons (named exports) |
| `@mal-icons/preact/gi`            | All Game Icons icons (named exports) |
| `@mal-icons/preact/gr`            | All Grommet icons (named exports) |
| `@mal-icons/preact/fa/FaHeart` | A single icon module              |
| `@mal-icons/preact/fab/FabGithub` | A single icon module              |
| `@mal-icons/preact/far/FarHeart` | A single icon module              |
| `@mal-icons/preact/fc/FcAbout` | A single icon module              |
| `@mal-icons/preact/fi/FiActivity` | A single icon module              |
| `@mal-icons/preact/gi/GiAce` | A single icon module              |
| `@mal-icons/preact/gr/GrHome` | A single icon module              |
| `@mal-icons/preact/io`            | All Ionicons (named exports)      |
| `@mal-icons/preact/lu`            | All Lucide (named exports)        |
| `@mal-icons/preact/mdf` | All Material Icons Filled (named exports) |
| `@mal-icons/preact/mdr` | All Material Icons Rounded (named exports) |
| `@mal-icons/preact/mds` | All Material Icons Sharp (named exports) |
| `@mal-icons/preact/mdt` | All Material Icons Two Tone (named exports) |
| `@mal-icons/preact/mso` | All Material Symbols Outlined (named exports) |
| `@mal-icons/preact/msr` | All Material Symbols Rounded (named exports) |
| `@mal-icons/preact/mss` | All Material Symbols Sharp (named exports) |
| `@mal-icons/preact/oc`            | All Octicons (named exports)      |
| `@mal-icons/preact/io/IoHeart`    | A single Ionicons icon module     |
| `@mal-icons/preact/lu/LuHeart`    | A single Lucide icon module       |
| `@mal-icons/preact/oc/OcHeart16`    | A single Octicons icon module     |
| `@mal-icons/preact/ti`            | All Typicons (named exports)      |
| `@mal-icons/preact/wi`            | All Weather Icons (named exports) |
| `@mal-icons/preact/ti/TiHeart`    | A single Typicons icon module     |
| `@mal-icons/preact/wi/WiDaySunny` | A single Weather Icons icon module |
| `@mal-icons/preact/hi` | All Heroicons icons (named exports) |
| `@mal-icons/preact/hi/HiAcademicCap` | A single Heroicons icon module |
| `@mal-icons/preact/sl` | All Simple Line Icons icons (named exports) |
| `@mal-icons/preact/sl/SlActionRedo` | A single Simple Line Icons icon module |
| `@mal-icons/preact/cg` | All css.gg icons (named exports) |
| `@mal-icons/preact/cg/CgAbstract` | A single css.gg icon module |
| `@mal-icons/preact/vsc` | All Codicons icons (named exports) |
| `@mal-icons/preact/vsc/VscAccount` | A single Codicons icon module |
| `@mal-icons/preact/tf` | All Themify icons (named exports) |
| `@mal-icons/preact/tf/TfAgenda` | A single Themify icon module |
| `@mal-icons/preact/rx` | All Radix Icons icons (named exports) |
| `@mal-icons/preact/rx/RxAccessibility` | A single Radix Icons icon module |
| `@mal-icons/preact/bs` | All Bootstrap Icons icons (named exports) |
| `@mal-icons/preact/bs/BsAlarm` | A single Bootstrap Icons icon module |
| `@mal-icons/preact/ri` | All Remix Icon icons (named exports) |
| `@mal-icons/preact/ri/RiHome2Line` | A single Remix Icon icon module |
| `@mal-icons/preact/si` | All Simple Icons icons (named exports) |
| `@mal-icons/preact/si/SiGithub` | A single Simple Icons icon module |

## Example

A Vite + Preact 10 gallery lives in
[`examples/preact`](https://github.com/mal-icons/mal-icons/tree/main/examples/preact).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/preact`](https://github.com/mal-icons/mal-icons/tree/main/packages/preact).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
