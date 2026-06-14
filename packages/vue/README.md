# @mal-icons/vue

[![npm](https://img.shields.io/npm/v/@mal-icons/vue.svg)](https://www.npmjs.com/package/@mal-icons/vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

Vue 3 adapter for [**mal-icons**](https://github.com/mal-icons/mal-icons) — a
high-performance, tree-shakeable icon SDK. Each icon is a pre-generated Vue
component that renders plain SVG, with no runtime parsing and no `v-html`.

## Highlights

- **Tree-shakeable** — every icon is its own module.
- **Tiny** — strict per-icon size budget.
- **Themeable** — `provide`/`inject` theming via `provideIconContext`, with per-icon overrides.
- **Pure-CSS animations** — `spin`, `pulse`, `beat`, `bounce`, `ping`, `shake`, `wiggle`, `float`, `heartbeat`, `flip`, `rotate`, `zoom`, `fade`, `slide`, `glow`, `swing`, `tada`, with a `prefers-reduced-motion` guard.
- **Accessible** — correct `role` / `aria-hidden` and optional `<title>`.

## Installation

```bash
bun add @mal-icons/vue
# or
npm install @mal-icons/vue
```

> Requires Vue 3.3 or newer (peer dependency).

## Use with AI agents

AI coding agents can add and theme these icons for you via the
[`mal-icons` agent skill](../../skills/mal-icons). Install it with the
[`skills` CLI](https://www.npmjs.com/package/skills):

```bash
npx skills add mal-icons/mal-icons
```

Then ask your agent to "add a trash icon" and it searches the catalog and writes
the correct `@mal-icons/vue` import. See the
[Vue setup guide](../../skills/mal-icons/references/setup/vue.md).

## Quick start

```vue
<script setup lang="ts">
import { FiActivity } from "@mal-icons/vue/fi";
</script>

<template>
  <FiActivity :size="24" title="Status" />
</template>
```

### App-wide theming

Call `provideIconContext` in a parent component's `setup` — all descendant
icons inherit the values, and per-icon props override them:

```vue
<script setup lang="ts">
import { provideIconContext } from "@mal-icons/vue";

provideIconContext({ size: 20, color: "#3366ff" });
</script>
```

## Props

| Prop             | Type                                                                           | Description                                          |
| ---------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `size`           | `number \| string`                                                             | Width and height (defaults to `1em`)                 |
| `color`          | `string`                                                                       | Overrides `currentColor`                             |
| `weight`         | `"thin" \| "light" \| "regular" \| "bold"`                                     | Stroke weight for stroke-based sets                  |
| `animate`        | `IconAnimation` (`"spin"`, `"pulse"`, `"bounce"`, `"shake"`, `"heartbeat"`, …) | CSS animation preset                                 |
| `secondaryColor` | `string`                                                                       | Multi-tone color, exposed as `--mal-icons-secondary` |
| `title`          | `string`                                                                       | Accessible label                                     |
| `class`          | `string`                                                                       | Additional class names                               |

## Animations

```vue
<script setup lang="ts">
import { ICON_ANIMATIONS_CSS } from "@mal-icons/core";
import { FiLoader } from "@mal-icons/vue/fi";
</script>

<template>
  <component is="style">{{ ICON_ANIMATIONS_CSS }}</component>
  <FiLoader animate="spin" />
</template>
```

## API

```ts
import {
  IconBase,
  createIcon,
  provideIconContext,
  IconContextKey,
  DefaultIconContext,
} from "@mal-icons/vue";
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

| Import                         | Contents                          |
| ------------------------------ | --------------------------------- |
| `@mal-icons/vue`               | Adapter and theming helpers       |
| `@mal-icons/vue/ci`            | All Circum icons (named exports)  |
| `@mal-icons/vue/ci/CiHeart`    | A single Circum icon module       |
| `@mal-icons/vue/fa`            | All Font Awesome icons (named exports) |
| `@mal-icons/vue/fab`            | All Font Awesome Brands icons (named exports) |
| `@mal-icons/vue/far`            | All Font Awesome Regular icons (named exports) |
| `@mal-icons/vue/fi`            | All Feather icons (named exports) |
| `@mal-icons/vue/fa/FaHeart` | A single icon module              |
| `@mal-icons/vue/fab/FabGithub` | A single icon module              |
| `@mal-icons/vue/far/FarHeart` | A single icon module              |
| `@mal-icons/vue/fi/FiActivity` | A single icon module              |
| `@mal-icons/vue/io`            | All Ionicons (named exports)      |
| `@mal-icons/vue/io/IoHeart`    | A single Ionicons icon module     |
| `@mal-icons/vue/ti`            | All Typicons (named exports)      |
| `@mal-icons/vue/ti/TiHeart`    | A single Typicons icon module     |

## Example

A Vite + Vue 3.5 gallery lives in
[`examples/vue`](https://github.com/mal-icons/mal-icons/tree/main/examples/vue),
and a Nuxt 3 (SSR) demo in
[`examples/nuxt`](https://github.com/mal-icons/mal-icons/tree/main/examples/nuxt).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/vue`](https://github.com/mal-icons/mal-icons/tree/main/packages/vue).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
