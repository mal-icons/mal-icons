# @mal-icons/web


[![npm](https://img.shields.io/npm/v/@mal-icons/web.svg)](https://www.npmjs.com/package/@mal-icons/web)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

Zero-build web renderer for [**mal-icons**](https://github.com/mal-icons/mal-icons).
Use icons in **plain HTML** via a `<mal-icons>` custom element, render them
imperatively, or lazy-load them from a CDN — no framework, no bundler required.

## Highlights

- **No build step** — works straight from a `<script type="module">` and a CDN.
- **Safe by construction** — every shape is built with `document.createElementNS`; **never** `innerHTML`, so CDN-loaded data is safe.
- **`<mal-icons>` custom element** — declarative, re-renders on attribute changes.
- **Serializable data** — icons ship as tiny tree-shakeable JSON payloads.
- **Theming + animations** — `size`, `color`, `multicolor`, `weight`, `animate`, `secondaryColor`, plus the shared CSS animation presets.

## Installation

```bash
bun add @mal-icons/web
# or
npm install @mal-icons/web
```

Or use it directly from a CDN with no install (see below).

## Use with AI agents

AI coding agents can add and theme these icons for you via the
[`mal-icons` agent skill](../../skills/mal-icons). Install it with the
[`skills` CLI](https://www.npmjs.com/package/skills):

```bash
npx skills add mal-icons/mal-icons
```

Then ask your agent to "add a trash icon" and it searches the catalog and writes
the correct `@mal-icons/web` usage. See the
[Web setup guide](../../skills/mal-icons/references/setup/web.md).

## Quick start — custom element (no build)

```html
<script type="module">
  import { defineMalIcon, registerIcons } from "https://esm.sh/@mal-icons/web";
  import { fi } from "https://esm.sh/@mal-icons/web/fi";

  registerIcons(fi);
  defineMalIcon();
</script>

<mal-icons name="FiActivity" size="24" title="Status"></mal-icons>
```

The element observes its attributes — change `size`, `color`, `weight`, or
`animate` and it re-renders automatically.

## Imperative rendering

```js
import { renderIcon } from "@mal-icons/web";
import FiActivity from "@mal-icons/web/fi/FiActivity.json" with { type: "json" };

document.body.appendChild(
  renderIcon(FiActivity, { size: 24, title: "Status" }),
);
```

## Lazy / CDN loading

```js
import { cdnLoader, defineMalIcon } from "@mal-icons/web";

const load = cdnLoader("https://cdn.example.com/mal-icons/fi");
const data = await load("FiActivity");

// Or wire the loader into the custom element for on-demand resolution:
defineMalIcon("mal-icons", load);
```

```html
<!-- resolves <baseUrl>/<name>.json via the loader, or a direct src URL -->
<mal-icons name="FiActivity"></mal-icons>
<mal-icons src="https://cdn.example.com/fi/FiActivity.json"></mal-icons>
```

## API

| Export          | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `renderIcon`    | Build an `<svg>` element from `IconData` (no `innerHTML`)       |
| `defineMalIcon` | Register the `<mal-icons>` custom element (optional CDN loader) |
| `registerIcons` | Seed the in-memory registry for synchronous `name` resolution   |
| `clearRegistry` | Clear the registry (mainly for tests)                           |
| `cdnLoader`     | Build a validating loader for `<baseUrl>/<name>.json`           |
| `isIconData`    | Type guard validating an unknown payload                        |
| `IconLoader`    | `(name: string) => Promise<IconData>` type                      |

### `<mal-icons>` attributes

`name`, `src`, `size`, `color`, `multicolor`, `weight`, `animate`, `title`, `class`.

## Animations

```js
import { ICON_ANIMATIONS_CSS } from "@mal-icons/core";

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>${ICON_ANIMATIONS_CSS}</style>`,
);
```

```html
<mal-icons name="FiLoader" animate="spin"></mal-icons>
```

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
| [Tabler Icons](https://tabler.io/icons) | [MIT license](https://github.com/tabler/tabler-icons/blob/main/LICENSE) | 3.44.0 | 5093 |
| [Themify](https://themify.me/themify-icons) | [SIL OFL 1.1 license](https://github.com/lykmapipo/themify-icons/blob/master/README.md) | 9600186 | 352 |
| [Typicons](https://www.s-ings.com/typicons/) | [CC BY-SA 4.0 license](https://github.com/stephenhutchings/typicons.font/blob/master/LICENCE.md) | 2.1.2   |   336 |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | [SIL OFL 1.1 license](https://github.com/erikflowers/weather-icons/blob/master/README.md#licensing) | 2.0.12  |   219 |

## Subpath exports

| Import                              | Contents                                          |
| ----------------------------------- | ------------------------------------------------- |
| `@mal-icons/web`                    | Renderer, custom element, CDN loader              |
| `@mal-icons/web/ad`                 | The Ant Design set as a `{ name: IconData }` object   |
| `@mal-icons/web/ci`                 | The Circum set as a `{ name: IconData }` object   |
| `@mal-icons/web/dev`                 | The Devicons set as a `{ name: IconData }` object   |
| `@mal-icons/web/ad/AdHome.json`    | A single Ant Design icon's JSON data              |
| `@mal-icons/web/ci/CiHeart.json`    | A single Circum icon's JSON data                  |
| `@mal-icons/web/dev/DevDreamhost.json`    | A single Devicons icon's JSON data                  |
| `@mal-icons/web/fa`                 | The Font Awesome set as a `{ name: IconData }` object  |
| `@mal-icons/web/fab`                 | The Font Awesome Brands set as a `{ name: IconData }` object  |
| `@mal-icons/web/far`                 | The Font Awesome Regular set as a `{ name: IconData }` object  |
| `@mal-icons/web/fc`                 | The Flat Color set as a `{ name: IconData }` object  |
| `@mal-icons/web/fi`                 | The Feather set as a `{ name: IconData }` object  |
| `@mal-icons/web/gi`                 | The Game Icons set as a `{ name: IconData }` object  |
| `@mal-icons/web/gr`                 | The Grommet set as a `{ name: IconData }` object  |
| `@mal-icons/web/fa/FaHeart.json` | A single icon's JSON data                         |
| `@mal-icons/web/fab/FabGithub.json` | A single icon's JSON data                         |
| `@mal-icons/web/far/FarHeart.json` | A single icon's JSON data                         |
| `@mal-icons/web/fc/FcAbout.json` | A single icon's JSON data                         |
| `@mal-icons/web/fi/FiActivity.json` | A single icon's JSON data                         |
| `@mal-icons/web/gi/GiAce.json` | A single icon's JSON data                         |
| `@mal-icons/web/gr/GrHome.json` | A single icon's JSON data                         |
| `@mal-icons/web/io`                 | The Ionicons set as a `{ name: IconData }` object |
| `@mal-icons/web/lu`                 | The Lucide set as a `{ name: IconData }` object   |
| `@mal-icons/web/mdf` | All Material Icons Filled (named exports) |
| `@mal-icons/web/mdr` | All Material Icons Rounded (named exports) |
| `@mal-icons/web/mds` | All Material Icons Sharp (named exports) |
| `@mal-icons/web/mdt` | All Material Icons Two Tone (named exports) |
| `@mal-icons/web/mso` | All Material Symbols Outlined (named exports) |
| `@mal-icons/web/msr` | All Material Symbols Rounded (named exports) |
| `@mal-icons/web/mss` | All Material Symbols Sharp (named exports) |
| `@mal-icons/web/oc`                 | The Octicons set as a `{ name: IconData }` object |
| `@mal-icons/web/io/IoHeart.json`    | A single Ionicons icon's JSON data                |
| `@mal-icons/web/lu/LuHeart.json`    | A single Lucide icon's JSON data                  |
| `@mal-icons/web/oc/OcHeart16.json`    | A single Octicons icon's JSON data                |
| `@mal-icons/web/ti`                 | The Typicons set as a `{ name: IconData }` object |
| `@mal-icons/web/wi`                 | The Weather Icons set as a `{ name: IconData }` object |
| `@mal-icons/web/ti/TiHeart.json`    | A single Typicons icon's JSON data                |
| `@mal-icons/web/wi/WiDaySunny.json` | A single Weather Icons icon's JSON data           |
| `@mal-icons/web/hi` | All Heroicons icons (named exports) |
| `@mal-icons/web/hi/HiAcademicCap.json` | A single Heroicons icon module |
| `@mal-icons/web/sl` | All Simple Line Icons icons (named exports) |
| `@mal-icons/web/sl/SlActionRedo.json` | A single Simple Line Icons icon module |
| `@mal-icons/web/cg` | All css.gg icons (named exports) |
| `@mal-icons/web/cg/CgAbstract.json` | A single css.gg icon module |
| `@mal-icons/web/vsc` | All Codicons icons (named exports) |
| `@mal-icons/web/vsc/VscAccount.json` | A single Codicons icon module |
| `@mal-icons/web/tf` | All Themify icons (named exports) |
| `@mal-icons/web/tf/TfAgenda.json` | A single Themify icon module |
| `@mal-icons/web/rx` | All Radix Icons icons (named exports) |
| `@mal-icons/web/rx/RxAccessibility.json` | A single Radix Icons icon module |
| `@mal-icons/web/bs` | All Bootstrap Icons icons (named exports) |
| `@mal-icons/web/bs/BsAlarm.json` | A single Bootstrap Icons icon module |
| `@mal-icons/web/ri` | All Remix Icon icons (named exports) |
| `@mal-icons/web/ri/RiHome2Line.json` | A single Remix Icon icon module |
| `@mal-icons/web/si` | All Simple Icons icons (named exports) |
| `@mal-icons/web/si/SiGithub.json` | A single Simple Icons icon module |
| `@mal-icons/web/bx` | All Boxicons Regular icons (named exports) |
| `@mal-icons/web/bx/BxAbacus.json` | A single Boxicons Regular icon module |
| `@mal-icons/web/bxl` | All Boxicons Logos icons (named exports) |
| `@mal-icons/web/bxl/BxlGithub.json` | A single Boxicons Logos icon module |
| `@mal-icons/web/bxs` | All Boxicons Solid icons (named exports) |
| `@mal-icons/web/bxs/BxsHeart.json` | A single Boxicons Solid icon module |
| `@mal-icons/web/tb` | All Tabler icons (named exports) |
| `@mal-icons/web/tb/TbHeart.json` | A single Tabler icon module |

## Example

A framework-free Vite demo using `<mal-icons>` and `registerIcons` lives in
[`examples/web`](https://github.com/mal-icons/mal-icons/tree/main/examples/web).
A no-build SVG sprite demo lives in
[`examples/cdn-sprite`](https://github.com/mal-icons/mal-icons/tree/main/examples/cdn-sprite).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/web`](https://github.com/mal-icons/mal-icons/tree/main/packages/web).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
