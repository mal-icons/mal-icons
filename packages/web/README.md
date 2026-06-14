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
- **Theming + animations** — `size`, `color`, `weight`, `animate`, `secondaryColor`, plus the shared CSS animation presets.

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

`name`, `src`, `size`, `color`, `weight`, `animate`, `title`, `class`.

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
| [Circum Icons](https://circumicons.com/) | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE) | 2.0.2   |   288 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |
| [Font Awesome Free](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  1402 |
| [Font Awesome Free Brands](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  495 |
| [Font Awesome Free Regular](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  163 |
| [Ionicons](https://ionic.io/ionicons)    | [MIT license](https://github.com/ionic-team/ionicons/blob/main/LICENSE)           | 8.0.13  |  1357 |
| [Typicons](https://www.s-ings.com/typicons/) | [CC BY-SA 4.0 license](https://github.com/stephenhutchings/typicons.font/blob/master/LICENCE.md) | 2.1.2   |   336 |

## Subpath exports

| Import                              | Contents                                          |
| ----------------------------------- | ------------------------------------------------- |
| `@mal-icons/web`                    | Renderer, custom element, CDN loader              |
| `@mal-icons/web/ci`                 | The Circum set as a `{ name: IconData }` object   |
| `@mal-icons/web/ci/CiHeart.json`    | A single Circum icon's JSON data                  |
| `@mal-icons/web/fa`                 | The Font Awesome set as a `{ name: IconData }` object  |
| `@mal-icons/web/fab`                 | The Font Awesome Brands set as a `{ name: IconData }` object  |
| `@mal-icons/web/far`                 | The Font Awesome Regular set as a `{ name: IconData }` object  |
| `@mal-icons/web/fi`                 | The Feather set as a `{ name: IconData }` object  |
| `@mal-icons/web/fa/FaHeart.json` | A single icon's JSON data                         |
| `@mal-icons/web/fab/FabGithub.json` | A single icon's JSON data                         |
| `@mal-icons/web/far/FarHeart.json` | A single icon's JSON data                         |
| `@mal-icons/web/fi/FiActivity.json` | A single icon's JSON data                         |
| `@mal-icons/web/io`                 | The Ionicons set as a `{ name: IconData }` object |
| `@mal-icons/web/io/IoHeart.json`    | A single Ionicons icon's JSON data                |
| `@mal-icons/web/ti`                 | The Typicons set as a `{ name: IconData }` object |
| `@mal-icons/web/ti/TiHeart.json`    | A single Typicons icon's JSON data                |

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
