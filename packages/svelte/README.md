# @mal-icons/svelte


[![npm](https://img.shields.io/npm/v/@mal-icons/svelte.svg)](https://www.npmjs.com/package/@mal-icons/svelte)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

Svelte 5 adapter for [**mal-icons**](https://github.com/mal-icons/mal-icons) — a
high-performance, tree-shakeable icon SDK. Each icon is a pre-generated
`.svelte` component built with runes; shapes render via `<svelte:element>`,
never `{@html}`.

## Highlights

- **Svelte 5 runes** — modern, fine-grained reactivity.
- **Tree-shakeable** — every icon is its own component.
- **Themeable** — context theming via `setIconContext`, with per-icon overrides.
- **Ships source** — the package distributes its `.svelte` source so your
  bundler (Vite/SvelteKit) compiles it in your app's Svelte version.
- **Accessible** — correct `role` / `aria-hidden` and optional `<title>`.

## Installation

```bash
bun add @mal-icons/svelte
# or
npm install @mal-icons/svelte
```

> Requires Svelte 5 or newer (peer dependency).

## Use with AI agents

AI coding agents can add and theme these icons for you via the
[`mal-icons` agent skill](../../skills/mal-icons). Install it with the
[`skills` CLI](https://www.npmjs.com/package/skills):

```bash
npx skills add mal-icons/mal-icons
```

Then ask your agent to "add a trash icon" and it searches the catalog and writes
the correct `@mal-icons/svelte` import. See the
[Svelte setup guide](../../skills/mal-icons/references/setup/svelte.md).

## Quick start

```svelte
<script lang="ts">
  import { FiActivity } from "@mal-icons/svelte/fi";
</script>

<FiActivity size={24} title="Status" />
```

### App-wide theming

Call `setIconContext` in a parent component; descendants inherit the values and
per-icon props override them:

```svelte
<script lang="ts">
  import { setIconContext } from "@mal-icons/svelte";
  setIconContext({ size: 20, color: "#3366ff" });
</script>

<slot />
```

## Props

| Prop     | Type                                       | Description                          |
| -------- | ------------------------------------------ | ------------------------------------ |
| `size`   | `number \| string`                         | Width and height (defaults to `1em`) |
| `color`  | `string`                                   | Overrides `currentColor`             |
| `multicolor` | `boolean` | Keep the icon's own colors (omits the `currentColor` `stroke`/`fill` defaults) |
| `weight` | `"thin" \| "light" \| "regular" \| "bold"` | Stroke weight for stroke-based sets  |
| `title`  | `string`                                   | Accessible label                     |
| `class`  | `string`                                   | Additional class names               |

## API

```ts
import {
  IconBase,
  setIconContext,
  getIconContext,
  DefaultIconContext,
} from "@mal-icons/svelte";
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
| [Material Icons](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Outlined) | [Apache 2.0 license](https://github.com/marella/material-design-icons/blob/main/svg/LICENSE) | 0.14.15 |  2122 |
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

| Import                                   | Contents                          |
| ---------------------------------------- | --------------------------------- |
| `@mal-icons/svelte`                      | Adapter and context helpers       |
| `@mal-icons/svelte/ad`                   | All Ant Design icons (named exports)  |
| `@mal-icons/svelte/ci`                   | All Circum icons (named exports)  |
| `@mal-icons/svelte/dev`                   | All Devicons icons (named exports)  |
| `@mal-icons/svelte/ad/AdHome.svelte`    | A single Ant Design icon component    |
| `@mal-icons/svelte/ci/CiHeart.svelte`    | A single Circum icon component    |
| `@mal-icons/svelte/dev/DevDreamhost.svelte`    | A single Devicons icon component    |
| `@mal-icons/svelte/fa`                   | All Font Awesome icons (named exports) |
| `@mal-icons/svelte/fab`                   | All Font Awesome Brands icons (named exports) |
| `@mal-icons/svelte/far`                   | All Font Awesome Regular icons (named exports) |
| `@mal-icons/svelte/fc`                   | All Flat Color icons (named exports) |
| `@mal-icons/svelte/fi`                   | All Feather icons (named exports) |
| `@mal-icons/svelte/gr`                   | All Grommet icons (named exports) |
| `@mal-icons/svelte/fa/FaHeart.svelte` | A single icon component           |
| `@mal-icons/svelte/fab/FabGithub.svelte` | A single icon component           |
| `@mal-icons/svelte/far/FarHeart.svelte` | A single icon component           |
| `@mal-icons/svelte/fc/FcAbout.svelte` | A single icon component           |
| `@mal-icons/svelte/fi/FiActivity.svelte` | A single icon component           |
| `@mal-icons/svelte/gr/GrHome.svelte` | A single icon component           |
| `@mal-icons/svelte/io`                   | All Ionicons (named exports)      |
| `@mal-icons/svelte/lu`                   | All Lucide (named exports)        |
| `@mal-icons/svelte/md`                   | All Material Icons (named exports)        |
| `@mal-icons/svelte/mdf` | All Material Icons Filled (named exports) |
| `@mal-icons/svelte/mdr` | All Material Icons Rounded (named exports) |
| `@mal-icons/svelte/mds` | All Material Icons Sharp (named exports) |
| `@mal-icons/svelte/mdt` | All Material Icons Two Tone (named exports) |
| `@mal-icons/svelte/mso` | All Material Symbols Outlined (named exports) |
| `@mal-icons/svelte/msr` | All Material Symbols Rounded (named exports) |
| `@mal-icons/svelte/mss` | All Material Symbols Sharp (named exports) |
| `@mal-icons/svelte/oc`                   | All Octicons (named exports)      |
| `@mal-icons/svelte/io/IoHeart.svelte`    | A single Ionicons icon component  |
| `@mal-icons/svelte/lu/LuHeart.svelte`    | A single Lucide icon component    |
| `@mal-icons/svelte/md/MdFace.svelte`    | A single Material Icons icon component    |
| `@mal-icons/svelte/oc/OcHeart16.svelte`    | A single Octicons icon component  |
| `@mal-icons/svelte/ti`                   | All Typicons (named exports)      |
| `@mal-icons/svelte/wi`                   | All Weather Icons (named exports) |
| `@mal-icons/svelte/ti/TiHeart.svelte`    | A single Typicons icon component  |
| `@mal-icons/svelte/wi/WiDaySunny.svelte` | A single Weather Icons icon component |
| `@mal-icons/svelte/hi` | All Heroicons icons (named exports) |
| `@mal-icons/svelte/hi/HiAcademicCap` | A single Heroicons icon module |
| `@mal-icons/svelte/sl` | All Simple Line Icons icons (named exports) |
| `@mal-icons/svelte/sl/SlActionRedo` | A single Simple Line Icons icon module |
| `@mal-icons/svelte/cg` | All css.gg icons (named exports) |
| `@mal-icons/svelte/cg/CgAbstract` | A single css.gg icon module |
| `@mal-icons/svelte/vsc` | All Codicons icons (named exports) |
| `@mal-icons/svelte/vsc/VscAccount` | A single Codicons icon module |
| `@mal-icons/svelte/tf` | All Themify icons (named exports) |
| `@mal-icons/svelte/tf/TfAgenda` | A single Themify icon module |
| `@mal-icons/svelte/rx` | All Radix Icons icons (named exports) |
| `@mal-icons/svelte/rx/RxAccessibility` | A single Radix Icons icon module |

## Example

A Vite + Svelte 5 gallery (runes, scoped styles, `setIconContext`) lives in
[`examples/svelte`](https://github.com/mal-icons/mal-icons/tree/main/examples/svelte).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/svelte`](https://github.com/mal-icons/mal-icons/tree/main/packages/svelte).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
