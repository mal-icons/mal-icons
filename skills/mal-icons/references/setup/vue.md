# Setup — Vue 3 (`@mal-icons/vue`)

Vue 3 adapter. Each icon is a pre-generated Vue component that renders plain
SVG — no runtime parsing, no `v-html`.

## Install

```bash
bun add @mal-icons/vue
# or
npm install @mal-icons/vue
```

> Peer dependency: `vue >=3.3`.

## Quick start

```vue
<script setup lang="ts">
import { FiActivity } from "@mal-icons/vue/fi";
</script>

<template>
  <FiActivity :size="24" title="Status" />
</template>
```

## Import styles

```ts
import FiSearch from "@mal-icons/vue/fi/FiSearch"; // per-icon (default only)
import { FiSearch } from "@mal-icons/vue/fi"; // set barrel (named)
import { FiSearch } from "@mal-icons/vue"; // package root (named)
```

## Props

| Prop             | Type                                       | Notes                    |
| ---------------- | ------------------------------------------ | ------------------------ |
| `size`           | `number \| string`                         | Default `1em`            |
| `color`          | `string`                                   | Overrides `currentColor` |
| `weight`         | `"thin" \| "light" \| "regular" \| "bold"` | Stroke sets (`fi`)       |
| `animate`        | `IconAnimation`                            | CSS preset               |
| `secondaryColor` | `string`                                   | `--mal-icons-secondary`  |
| `title`          | `string`                                   | a11y label               |
| `class`          | `string`                                   | Extra classes            |

Attributes fall through to the underlying SVG automatically.

## App-wide theming

Call `provideIconContext` in a parent's `setup`; descendants inherit and
per-icon props override:

```vue
<script setup lang="ts">
import { provideIconContext } from "@mal-icons/vue";
provideIconContext({ size: 20, color: "#3366ff" });
</script>
```

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

## SSR (Nuxt)

Works server-side out of the box. A Nuxt 3 SSR demo lives in `examples/nuxt`.

## Pitfalls

- Named per-icon import → type error (use default).
- `.../fi/` trailing slash → "Module not found".
- Don't set `inheritAttrs: false` + manually spread `...attrs` onto the icon —
  attribute fall-through already handles it.
