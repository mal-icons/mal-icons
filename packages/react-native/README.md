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
| [Circum Icons](https://circumicons.com/) | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE) | 2.0.2   |   288 |
| [Devicons](https://devicons.io/)         | [MIT license](https://github.com/vorillaz/devicons/blob/main/LICENSE)             | 2.0.1   |  1725 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |
| [Font Awesome Free](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  1402 |
| [Font Awesome Free Brands](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  495 |
| [Font Awesome Free Regular](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  163 |
| [Ionicons](https://ionic.io/ionicons)    | [MIT license](https://github.com/ionic-team/ionicons/blob/main/LICENSE)           | 8.0.13  |  1357 |
| [Octicons](https://primer.style/octicons/) | [MIT license](https://github.com/primer/octicons/blob/main/LICENSE) | 19.28.1 |   733 |
| [Typicons](https://www.s-ings.com/typicons/) | [CC BY-SA 4.0 license](https://github.com/stephenhutchings/typicons.font/blob/master/LICENCE.md) | 2.1.2   |   336 |

## Subpath exports

| Import                                  | Contents                          |
| --------------------------------------- | --------------------------------- |
| `@mal-icons/react-native`               | Adapter and context               |
| `@mal-icons/react-native/ci`            | All Circum icons (named exports)  |
| `@mal-icons/react-native/dev`            | All Devicons icons (named exports)  |
| `@mal-icons/react-native/ci/CiHeart`    | A single Circum icon module       |
| `@mal-icons/react-native/dev/DevDreamhost`    | A single Devicons icon module       |
| `@mal-icons/react-native/fa`            | All Font Awesome icons (named exports) |
| `@mal-icons/react-native/fab`            | All Font Awesome Brands icons (named exports) |
| `@mal-icons/react-native/far`            | All Font Awesome Regular icons (named exports) |
| `@mal-icons/react-native/fi`            | All Feather icons (named exports) |
| `@mal-icons/react-native/fa/FaHeart` | A single icon module              |
| `@mal-icons/react-native/fab/FabGithub` | A single icon module              |
| `@mal-icons/react-native/far/FarHeart` | A single icon module              |
| `@mal-icons/react-native/fi/FiActivity` | A single icon module              |
| `@mal-icons/react-native/io`            | All Ionicons (named exports)      |
| `@mal-icons/react-native/oc`            | All Octicons (named exports)      |
| `@mal-icons/react-native/io/IoHeart`    | A single Ionicons icon module     |
| `@mal-icons/react-native/oc/OcHeart16`    | A single Octicons icon module     |
| `@mal-icons/react-native/ti`            | All Typicons (named exports)      |
| `@mal-icons/react-native/ti/TiHeart`    | A single Typicons icon module     |

## Example

An Expo demo that themes native `<Svg>` icons via `IconContext` lives in
[`examples/react-native`](https://github.com/mal-icons/mal-icons/tree/main/examples/react-native).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/react-native`](https://github.com/mal-icons/mal-icons/tree/main/packages/react-native).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
