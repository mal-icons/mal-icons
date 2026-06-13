# Setup — Svelte 5 (`@mal-icons/svelte`)

Svelte 5 adapter built with runes. Each icon is a pre-generated `.svelte`
component; shapes render via `<svelte:element>`, never `{@html}`. The package
ships its `.svelte` source so your bundler compiles it in your app's Svelte
version.

## Install

```bash
bun add @mal-icons/svelte
# or
npm install @mal-icons/svelte
```

> Peer dependency: `svelte >=5`. Works with Vite and SvelteKit.

## Quick start

```svelte
<script lang="ts">
  import { FiActivity } from "@mal-icons/svelte/fi";
</script>

<FiActivity size={24} title="Status" />
```

## Import styles

```ts
// per-icon keeps the .svelte extension (default import)
import FiSearch from "@mal-icons/svelte/fi/FiSearch.svelte";
// set barrel (named)
import { FiSearch } from "@mal-icons/svelte/fi";
// package root (named)
import { FiSearch } from "@mal-icons/svelte";
```

## Props

| Prop     | Type                                       | Notes                    |
| -------- | ------------------------------------------ | ------------------------ |
| `size`   | `number \| string`                         | Default `1em`            |
| `color`  | `string`                                   | Overrides `currentColor` |
| `weight` | `"thin" \| "light" \| "regular" \| "bold"` | Stroke sets (`fi`)       |
| `title`  | `string`                                   | a11y label               |
| `class`  | `string`                                   | Extra classes            |

## App-wide theming

Call `setIconContext` in a parent component; descendants inherit and per-icon
props override:

```svelte
<script lang="ts">
  import { setIconContext } from "@mal-icons/svelte";
  setIconContext({ size: 20, color: "#3366ff" });
</script>

<slot />
```

## API

```ts
import {
  IconBase,
  setIconContext,
  getIconContext,
  DefaultIconContext,
} from "@mal-icons/svelte";
```

## SSR (SvelteKit)

Renders server-side and hydrates out of the box.

## Pitfalls

- Per-icon imports include the `.svelte` extension.
- Named per-icon import (without the component being default) → error; the
  per-icon file's default export is the component.
- `.../fi/` trailing slash → "Module not found".
