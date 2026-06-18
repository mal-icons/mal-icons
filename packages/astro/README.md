# @mal-icons/astro


[![npm](https://img.shields.io/npm/v/@mal-icons/astro.svg)](https://www.npmjs.com/package/@mal-icons/astro)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

Astro adapter for [**mal-icons**](https://github.com/mal-icons/mal-icons) — a
high-performance icon SDK. Each icon is a pre-generated `.astro` component that
renders to **static SVG at build time** and ships **zero JavaScript**.

## Highlights

- **Zero runtime** — icons render at build time; nothing is shipped to the client.
- **Per-component props** — there is no runtime context, so theming is configured via props.
- **Accessible** — correct `role` / `aria-hidden` and optional `<title>`.

## Installation

```bash
bun add @mal-icons/astro
# or
npm install @mal-icons/astro
```

> Requires Astro 4 or newer (peer dependency).

## Use with AI agents

AI coding agents can add and theme these icons for you via the
[`mal-icons` agent skill](../../skills/mal-icons). Install it with the
[`skills` CLI](https://www.npmjs.com/package/skills):

```bash
npx skills add mal-icons/mal-icons
```

Then ask your agent to "add a trash icon" and it searches the catalog and writes
the correct `@mal-icons/astro` import. See the
[Astro setup guide](../../skills/mal-icons/references/setup/astro.md).

## Quick start

Import the `.astro` icon component directly and use it in your markup:

```astro
---
import FiActivity from "@mal-icons/astro/fi/FiActivity.astro";
---

<FiActivity size={24} title="Status" />
```

> Because Astro components render at build time and have no runtime context,
> theming is configured **per component** via props rather than a shared provider.

## Props

| Prop    | Type               | Description                          |
| ------- | ------------------ | ------------------------------------ |
| `size`  | `number \| string` | Width and height (defaults to `1em`) |
| `color` | `string`           | Overrides `currentColor`             |
| `multicolor` | `boolean` | Keep the icon's own colors (omits the `currentColor` `stroke`/`fill` defaults) |
| `title` | `string`           | Accessible label                     |
| `class` | `string`           | Additional class names               |

## Icons

The bundled icon sets, their upstream licenses, pinned versions, and counts:

| Icon Library                             | License                                                                           | Version | Count |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ------- | ----: |
| [Ant Design Icons](https://ant.design/components/icon) | [MIT license](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE) | 4.0.0   |   420 |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | [MIT license](https://github.com/twbs/icons/blob/main/LICENSE) | 1.13.1  |  2078 |
| [Boxicons Logos](https://boxicons.com/) | [CC BY 4.0 license](https://github.com/box-icons/boxicons/blob/master/LICENSE) | 2.1.4 | 155 |
| [Boxicons Regular](https://boxicons.com/) | [CC BY 4.0 license](https://github.com/box-icons/boxicons/blob/master/LICENSE) | 2.1.4 | 814 |
| [Boxicons Solid](https://boxicons.com/) | [CC BY 4.0 license](https://github.com/box-icons/boxicons/blob/master/LICENSE) | 2.1.4 | 665 |
| [Circum Icons](https://circumicons.com/) | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE) | 2.0.2   |   288 |
| [Codicons](https://microsoft.github.io/vscode-codicons/) | [CC BY 4.0 license](https://github.com/microsoft/vscode-codicons/blob/main/LICENSE) | 0.0.46 | 604 |
| [css.gg](https://css.gg/) | [MIT license](https://github.com/astrit/css.gg/blob/master/license) | 2.1.1 | 704 |
| [Devicons](https://devicons.io/)         | [MIT license](https://github.com/vorillaz/devicons/blob/main/LICENSE)             | 2.0.1   |  1725 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |
| [Flat Color Icons](https://icons8.github.io/flat-color-icons/) | [CC BY 4.0 license](https://github.com/icons8/flat-color-icons/blob/master/LICENSE.md) | 1.0.2   |   312 |
| [Font Awesome Free](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  1402 |
| [Game Icons](https://game-icons.net/) | [CC BY 3.0 license](https://github.com/game-icons/icons/blob/master/license.txt) | 82d9488 | 4180 |
| [Grommet](https://icons.grommet.io/) | [Apache 2.0 license](https://github.com/grommet/grommet-icons/blob/master/LICENSE) | 4.14.0  |   637 |
| [Heroicons](https://heroicons.com/) | [MIT license](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE) | 2.2.0 | 324 |
| [Ionicons](https://ionic.io/ionicons)    | [MIT license](https://github.com/ionic-team/ionicons/blob/main/LICENSE)           | 8.0.13  |  1357 |
| [Line Awesome](https://icons8.com/line-awesome) | [MIT license](https://github.com/icons8/line-awesome/blob/master/LICENSE.md) | 1.2.1 | 1544 |
| [Lucide](https://lucide.dev/icons/) | [ISC license](https://github.com/lucide-icons/lucide/blob/main/LICENSE) | 1.19.0  |  1727 |
| [Material Icons Filled](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Filled) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Icons Rounded](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Rounded) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Icons Sharp](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Sharp) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Icons Two Tone](https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Two+tone) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
| [Material Symbols Outlined](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Outlined) | [Apache 2.0 license](https://github.com/marella/material-symbols/blob/main/LICENSE) | 0.9.0 |  3004 |
| [Material Symbols Rounded](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Rounded) | [Apache 2.0 license](https://github.com/marella/material-symbols/blob/main/LICENSE) | 0.9.0 |  3004 |
| [Material Symbols Sharp](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Sharp) | [Apache 2.0 license](https://github.com/marella/material-symbols/blob/main/LICENSE) | 0.9.0 |  3004 |

| [Octicons](https://primer.style/octicons/) | [MIT license](https://github.com/primer/octicons/blob/main/LICENSE) | 19.28.1 |   733 |
| [Phosphor](https://phosphoricons.com/) | [MIT license](https://github.com/phosphor-icons/core/blob/main/LICENSE) | 2.0.8 | 1248 |
| [Radix Icons](https://www.radix-ui.com/icons) | [MIT license](https://github.com/radix-ui/icons/blob/master/LICENSE) | 0.0.17 | 318 |
| [Remix Icon](https://remixicon.com/) | [Apache 2.0 license](https://github.com/Remix-Design/RemixIcon/blob/master/License) | 4.6.0 | 3058 |
| [Simple Icons](https://simpleicons.org/) | [CC0 1.0 license](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md) | 16.23.0 | 3442 |
| [Simple Line Icons](https://simplelineicons.github.io/) | [MIT license](https://github.com/thesabbir/simple-line-icons/blob/master/LICENSE.md) | 2.5.5 | 189 |
| [Tabler Icons](https://tabler.io/icons) | [MIT license](https://github.com/tabler/tabler-icons/blob/main/LICENSE) | 3.44.0 | 5093 |
| [Themify](https://themify.me/themify-icons) | [SIL OFL 1.1 license](https://github.com/lykmapipo/themify-icons/blob/master/README.md) | 9600186 | 352 |
| [Typicons](https://www.s-ings.com/typicons/) | [CC BY-SA 4.0 license](https://github.com/stephenhutchings/typicons.font/blob/master/LICENCE.md) | 2.1.2   |   336 |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | [SIL OFL 1.1 license](https://github.com/erikflowers/weather-icons/blob/master/README.md#licensing) | 2.0.12  |   219 |

## Subpath exports

| Import                                 | Contents                       |
| -------------------------------------- | ------------------------------ |
| `@mal-icons/astro/ad/AdHome.astro`    | A single Ant Design icon component |
| `@mal-icons/astro/ci/CiHeart.astro`    | A single Circum icon component |
| `@mal-icons/astro/dev/DevDreamhost.astro`    | A single Devicons icon component |
| `@mal-icons/astro/fa/FaHeart.astro` | A single icon component        |
| `@mal-icons/astro/fi/FiActivity.astro` | A single icon component        |
| `@mal-icons/astro/gi/GiAce.astro` | A single icon component        |
| `@mal-icons/astro/gr/GrHome.astro` | A single icon component        |
| `@mal-icons/astro/fc/FcAbout.astro` | A single Flat Color icon component |
| `@mal-icons/astro/io/IoHeart.astro`    | A single Ionicons component    |
| `@mal-icons/astro/la/LaHeart.astro`    | A single Line Awesome component    |
| `@mal-icons/astro/lu/LuHeart.astro`    | A single Lucide component      |
| `@mal-icons/astro/mdf/MdfFace.astro`    | A single Material Icons Filled component |
| `@mal-icons/astro/mdr/MdrFace.astro`    | A single Material Icons Rounded component |
| `@mal-icons/astro/mds/MdsFace.astro`    | A single Material Icons Sharp component |
| `@mal-icons/astro/mdt/MdtFace.astro`    | A single Material Icons Two Tone component |
| `@mal-icons/astro/mso/MsoHome.astro`    | A single Material Symbols Outlined component |
| `@mal-icons/astro/msr/MsrHome.astro`    | A single Material Symbols Rounded component |
| `@mal-icons/astro/mss/MssHome.astro`    | A single Material Symbols Sharp component |
| `@mal-icons/astro/oc/OcHeart16.astro`    | A single Octicons component    |
| `@mal-icons/astro/ti/TiHeart.astro`    | A single Typicons component    |
| `@mal-icons/astro/wi/WiDaySunny.astro` | A single Weather Icons component |
| `@mal-icons/astro/IconBase.astro`      | The shared base component      |
| `@mal-icons/astro/hi` | All Heroicons icons (named exports) |
| `@mal-icons/astro/hi/HiAcademicCap.astro` | A single Heroicons icon module |
| `@mal-icons/astro/sl` | All Simple Line Icons icons (named exports) |
| `@mal-icons/astro/sl/SlActionRedo.astro` | A single Simple Line Icons icon module |
| `@mal-icons/astro/cg` | All css.gg icons (named exports) |
| `@mal-icons/astro/cg/CgAbstract.astro` | A single css.gg icon module |
| `@mal-icons/astro/vsc` | All Codicons icons (named exports) |
| `@mal-icons/astro/vsc/VscAccount.astro` | A single Codicons icon module |
| `@mal-icons/astro/tf` | All Themify icons (named exports) |
| `@mal-icons/astro/tf/TfAgenda.astro` | A single Themify icon module |
| `@mal-icons/astro/rx` | All Radix Icons icons (named exports) |
| `@mal-icons/astro/rx/RxAccessibility.astro` | A single Radix Icons icon module |
| `@mal-icons/astro/bs` | All Bootstrap Icons icons (named exports) |
| `@mal-icons/astro/bs/BsAlarm.astro` | A single Bootstrap Icons icon module |
| `@mal-icons/astro/ri` | All Remix Icon icons (named exports) |
| `@mal-icons/astro/ri/RiHome2Line.astro` | A single Remix Icon icon module |
| `@mal-icons/astro/si` | All Simple Icons icons (named exports) |
| `@mal-icons/astro/si/SiGithub.astro` | A single Simple Icons icon module |
| `@mal-icons/astro/bx` | All Boxicons Regular icons (named exports) |
| `@mal-icons/astro/bx/BxAbacus.astro` | A single Boxicons Regular icon module |
| `@mal-icons/astro/bxl` | All Boxicons Logos icons (named exports) |
| `@mal-icons/astro/bxl/BxlGithub.astro` | A single Boxicons Logos icon module |
| `@mal-icons/astro/bxs` | All Boxicons Solid icons (named exports) |
| `@mal-icons/astro/bxs/BxsHeart.astro` | A single Boxicons Solid icon module |
| `@mal-icons/astro/tb` | All Tabler icons (named exports) |
| `@mal-icons/astro/tb/TbHeart.astro` | A single Tabler icon module |
| `@mal-icons/astro/ph` | All Phosphor icons (named exports) |
| `@mal-icons/astro/ph/PhHeart.astro` | A single Phosphor icon module |

## Example

A static, zero-JS Astro site rendering the shared gallery lives in
[`examples/astro`](https://github.com/mal-icons/mal-icons/tree/main/examples/astro).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/astro`](https://github.com/mal-icons/mal-icons/tree/main/packages/astro).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
