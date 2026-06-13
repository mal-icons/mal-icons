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
| [Circum Icons](https://circumicons.com/) | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE) | 2.0.2   |   288 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |

## Subpath exports

| Import                                   | Contents                          |
| ---------------------------------------- | --------------------------------- |
| `@mal-icons/svelte`                      | Adapter and context helpers       |
| `@mal-icons/svelte/ci`                   | All Circum icons (named exports)  |
| `@mal-icons/svelte/ci/CiHeart.svelte`    | A single Circum icon component    |
| `@mal-icons/svelte/fi`                   | All Feather icons (named exports) |
| `@mal-icons/svelte/fi/FiActivity.svelte` | A single icon component           |

## Example

A Vite + Svelte 5 gallery (runes, scoped styles, `setIconContext`) lives in
[`examples/svelte`](https://github.com/mal-icons/mal-icons/tree/main/examples/svelte).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/svelte`](https://github.com/mal-icons/mal-icons/tree/main/packages/svelte).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
