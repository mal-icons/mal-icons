# @mal-icons/react-native


[![npm](https://img.shields.io/npm/v/@mal-icons/react-native.svg)](https://www.npmjs.com/package/@mal-icons/react-native)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

React Native adapter for [**mal-icons**](https://github.com/mal-icons/mal-icons).
The same icon set you use on the web renders natively on iOS and Android,
backed by [`react-native-svg`](https://github.com/software-mansion/react-native-svg).

## Highlights

- **Native rendering** — each icon maps to `react-native-svg` primitives (`Svg`, `Path`, `Polyline`, `Circle`, …), no WebView.
- **Tree-shakeable** — every icon is its own module.
- **Shared API** — the same prop surface and `IconContext` theming as the React adapter.
- **Accessible** — optional `title` for screen readers.

## Installation

```bash
bun add @mal-icons/react-native react-native-svg
# or
npm install @mal-icons/react-native react-native-svg
```

> Peer dependencies: `react >=18`, `react-native >=0.70`, and
> `react-native-svg >=13`. Follow the `react-native-svg` install steps for your
> project (Expo or bare).

## Use with AI agents

AI coding agents can add and theme these icons for you via the
[`mal-icons` agent skill](../../skills/mal-icons). Install it with the
[`skills` CLI](https://www.npmjs.com/package/skills):

```bash
npx skills add mal-icons/mal-icons
```

Then ask your agent to "add a trash icon" and it searches the catalog and writes
the correct `@mal-icons/react-native` import. See the
[React Native setup guide](../../skills/mal-icons/references/setup/react-native.md).

## Quick start

```tsx
import { FiActivity } from "@mal-icons/react-native/fi";

export function Status() {
  return <FiActivity size={24} color="#3366ff" title="Status" />;
}
```

### App-wide theming

Sizes are plain numbers — there is no DOM or CSS:

```tsx
import { IconContext } from "@mal-icons/react-native";

export function App() {
  return (
    <IconContext.Provider value={{ size: 20, color: "#3366ff" }}>
      <Screen />
    </IconContext.Provider>
  );
}
```

Per-icon props always override context values.

## Props

| Prop    | Type               | Description                         |
| ------- | ------------------ | ----------------------------------- |
| `size`  | `number \| string` | Width and height                    |
| `color` | `string`           | Overrides `currentColor`            |
| `multicolor` | `boolean` | Keep the icon's own colors (omits the `currentColor` `stroke`/`fill` defaults) |
| `title` | `string`           | Accessible label for screen readers |
| `style` | `StyleProp`        | Style passed to the root `<Svg>`    |

> CSS-only features from the web adapters (pure-CSS `animate`, `--mal-icons-secondary`)
> do not apply on native. Use `react-native-svg` / Reanimated for motion.

## API

```ts
import {
  IconBase,
  createIcon,
  IconContext,
  DefaultIconContext,
} from "@mal-icons/react-native";
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

| Import                                  | Contents                          |
| --------------------------------------- | --------------------------------- |
| `@mal-icons/react-native`               | Adapter and context               |
| `@mal-icons/react-native/ad`            | All Ant Design icons (named exports)  |
| `@mal-icons/react-native/ci`            | All Circum icons (named exports)  |
| `@mal-icons/react-native/dev`            | All Devicons icons (named exports)  |
| `@mal-icons/react-native/ad/AdHome`    | A single Ant Design icon module       |
| `@mal-icons/react-native/ci/CiHeart`    | A single Circum icon module       |
| `@mal-icons/react-native/dev/DevDreamhost`    | A single Devicons icon module       |
| `@mal-icons/react-native/fa`            | All Font Awesome icons (named exports) |
| `@mal-icons/react-native/fab`            | All Font Awesome Brands icons (named exports) |
| `@mal-icons/react-native/far`            | All Font Awesome Regular icons (named exports) |
| `@mal-icons/react-native/fc`            | All Flat Color icons (named exports) |
| `@mal-icons/react-native/fi`            | All Feather icons (named exports) |
| `@mal-icons/react-native/gr`            | All Grommet icons (named exports) |
| `@mal-icons/react-native/fa/FaHeart` | A single icon module              |
| `@mal-icons/react-native/fab/FabGithub` | A single icon module              |
| `@mal-icons/react-native/far/FarHeart` | A single icon module              |
| `@mal-icons/react-native/fc/FcAbout` | A single icon module              |
| `@mal-icons/react-native/fi/FiActivity` | A single icon module              |
| `@mal-icons/react-native/gr/GrHome` | A single icon module              |
| `@mal-icons/react-native/io`            | All Ionicons (named exports)      |
| `@mal-icons/react-native/lu`            | All Lucide (named exports)        |
| `@mal-icons/react-native/md`            | All Material Icons (named exports)        |
| `@mal-icons/react-native/mdf` | All Material Icons Filled (named exports) |
| `@mal-icons/react-native/mdr` | All Material Icons Rounded (named exports) |
| `@mal-icons/react-native/mds` | All Material Icons Sharp (named exports) |
| `@mal-icons/react-native/mdt` | All Material Icons Two Tone (named exports) |
| `@mal-icons/react-native/mso` | All Material Symbols Outlined (named exports) |
| `@mal-icons/react-native/msr` | All Material Symbols Rounded (named exports) |
| `@mal-icons/react-native/mss` | All Material Symbols Sharp (named exports) |
| `@mal-icons/react-native/oc`            | All Octicons (named exports)      |
| `@mal-icons/react-native/io/IoHeart`    | A single Ionicons icon module     |
| `@mal-icons/react-native/lu/LuHeart`    | A single Lucide icon module       |
| `@mal-icons/react-native/md/MdFace`    | A single Material Icons icon module       |
| `@mal-icons/react-native/oc/OcHeart16`    | A single Octicons icon module     |
| `@mal-icons/react-native/ti`            | All Typicons (named exports)      |
| `@mal-icons/react-native/wi`            | All Weather Icons (named exports) |
| `@mal-icons/react-native/ti/TiHeart`    | A single Typicons icon module     |
| `@mal-icons/react-native/wi/WiDaySunny` | A single Weather Icons icon module |
| `@mal-icons/react-native/hi` | All Heroicons icons (named exports) |
| `@mal-icons/react-native/hi/HiAcademicCap` | A single Heroicons icon module |
| `@mal-icons/react-native/sl` | All Simple Line Icons icons (named exports) |
| `@mal-icons/react-native/sl/SlActionRedo` | A single Simple Line Icons icon module |
| `@mal-icons/react-native/cg` | All css.gg icons (named exports) |
| `@mal-icons/react-native/cg/CgAbstract` | A single css.gg icon module |
| `@mal-icons/react-native/vsc` | All Codicons icons (named exports) |
| `@mal-icons/react-native/vsc/VscAccount` | A single Codicons icon module |
| `@mal-icons/react-native/tf` | All Themify icons (named exports) |
| `@mal-icons/react-native/tf/TfAgenda` | A single Themify icon module |
| `@mal-icons/react-native/rx` | All Radix Icons icons (named exports) |
| `@mal-icons/react-native/rx/RxAccessibility` | A single Radix Icons icon module |

## Example

An Expo demo that themes native `<Svg>` icons via `IconContext` lives in
[`examples/react-native`](https://github.com/mal-icons/mal-icons/tree/main/examples/react-native).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/react-native`](https://github.com/mal-icons/mal-icons/tree/main/packages/react-native).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
