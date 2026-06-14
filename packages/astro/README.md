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
| `title` | `string`           | Accessible label                     |
| `class` | `string`           | Additional class names               |

## Icons

The bundled icon sets, their upstream licenses, pinned versions, and counts:

| Icon Library                             | License                                                                           | Version | Count |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ------- | ----: |
| [Ant Design Icons](https://ant.design/components/icon) | [MIT license](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE) | 4.0.0   |   420 |
| [Circum Icons](https://circumicons.com/) | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE) | 2.0.2   |   288 |
| [Devicons](https://devicons.io/)         | [MIT license](https://github.com/vorillaz/devicons/blob/main/LICENSE)             | 2.0.1   |  1725 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |
| [Font Awesome Free](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  1402 |
| [Ionicons](https://ionic.io/ionicons)    | [MIT license](https://github.com/ionic-team/ionicons/blob/main/LICENSE)           | 8.0.13  |  1357 |
| [Octicons](https://primer.style/octicons/) | [MIT license](https://github.com/primer/octicons/blob/main/LICENSE) | 19.28.1 |   733 |
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
| `@mal-icons/astro/io/IoHeart.astro`    | A single Ionicons component    |
| `@mal-icons/astro/oc/OcHeart16.astro`    | A single Octicons component    |
| `@mal-icons/astro/ti/TiHeart.astro`    | A single Typicons component    |
| `@mal-icons/astro/wi/WiDaySunny.astro` | A single Weather Icons component |
| `@mal-icons/astro/IconBase.astro`      | The shared base component      |

## Example

A static, zero-JS Astro site rendering the shared gallery lives in
[`examples/astro`](https://github.com/mal-icons/mal-icons/tree/main/examples/astro).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/astro`](https://github.com/mal-icons/mal-icons/tree/main/packages/astro).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
