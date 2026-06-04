# mal-icon

A high-performance, multi-framework icon SDK. Author your UI with a single,
consistent API across **React**, **Vue**, and **Svelte**, and ship only the
icons you actually use.

Icons are generated ahead of time into individual, tree-shakeable components —
there is no runtime tree-walking, no JSON parsing on render, and no
`dangerouslySetInnerHTML`.

> Built and tested end-to-end with **Bun** (runtime, package manager, bundler,
> and test runner).

## Highlights

- **Multi-framework** — first-class React, React Native, Vue 3, and Svelte 5
  adapters that share one data model and render identical SVG markup.
- **Compile-time generation** — each icon is its own module, so bundlers keep
  exactly what you import and nothing else.
- **Tiny by design** — a strict per-icon size budget (< 0.8 KB gzipped) is
  enforced in CI.
- **Flexible delivery** — direct imports, SVG sprites, CDN/lazy loading, and
  dynamic-by-name resolution.
- **Theming** — size, color, and class are resolved through a context provider
  with per-icon overrides.
- **Differentiators** — opt-in CSS animations, stroke weights, multi-tone
  colors, and React Server Component support.
- **First-class DX** — type-safe icon names, fuzzy and natural-language search,
  a vendoring CLI, a license report, and an ESLint plugin.
- **Accessible** — correct `role`/`aria-hidden` handling and optional titles.

## Packages

| Package                   | Description                                        |
| ------------------------- | -------------------------------------------------- |
| `@mal-icon/core`          | Framework-agnostic types and theming logic         |
| `@mal-icon/react`         | React adapter and generated icons                  |
| `@mal-icon/react-native`  | React Native adapter and generated icons           |
| `@mal-icon/vue`           | Vue 3 adapter and generated icons                  |
| `@mal-icon/svelte`        | Svelte 5 adapter and generated icons               |
| `@mal-icon/preact`        | Preact adapter and generated icons                 |
| `@mal-icon/solid`         | Solid adapter and generated icons                  |
| `@mal-icon/angular`       | Angular standalone adapter and generated icons     |
| `@mal-icon/astro`         | Astro adapter and generated `.astro` components    |
| `@mal-icon/web`           | Zero-build web/CDN renderer, data and `<mal-icon>` |
| `@mal-icon/eslint-plugin` | Lint rules for correct, minimal icon usage         |

## Quick start

### React

```tsx
import { FiActivity } from "@mal-icon/react/fi";

export function Status() {
  return <FiActivity size={24} color="currentColor" title="Status" />;
}
```

Provide app-wide defaults with the context provider:

```tsx
import { IconContext } from "@mal-icon/react";

<IconContext.Provider value={{ size: 20, color: "#3366ff" }}>
  <App />
</IconContext.Provider>;
```

### React Native

Backed by [`react-native-svg`](https://github.com/software-mansion/react-native-svg),
so the same icons render natively on iOS and Android:

```tsx
import { FiActivity } from "@mal-icon/react-native/fi";

export function Status() {
  return <FiActivity size={24} color="#3366ff" title="Status" />;
}
```

Theming flows through the same context API (sizes are plain numbers, since
there is no DOM/CSS):

```tsx
import { IconContext } from "@mal-icon/react-native";

<IconContext.Provider value={{ size: 20, color: "#3366ff" }}>
  <App />
</IconContext.Provider>;
```

### Vue

```vue
<script setup lang="ts">
import { FiActivity } from "@mal-icon/vue/fi";
</script>

<template>
  <FiActivity :size="24" title="Status" />
</template>
```

### Svelte

```svelte
<script lang="ts">
  import { FiActivity } from "@mal-icon/svelte/fi";
</script>

<FiActivity size={24} title="Status" />
```

### Preact

```tsx
import { FiActivity } from "@mal-icon/preact/fi";

<FiActivity size={24} title="Status" />;
```

### Solid

```tsx
import { FiActivity } from "@mal-icon/solid/fi";

<FiActivity size={24} title="Status" />;
```

### Angular

```ts
import { FiActivity } from "@mal-icon/angular/fi";

@Component({
  standalone: true,
  imports: [FiActivity],
  template: `<mal-fi-activity [size]="24" title="Status" />`,
})
export class StatusIcon {}
```

### Astro

```astro
---
import FiActivity from "@mal-icon/astro/fi/FiActivity.astro";
---

<FiActivity size={24} title="Status" />
```

> Astro components render at build time and have no runtime context, so
> theming is configured per-component via props rather than a shared provider.

### Web / CDN (no build)

```html
<script type="module">
  import { defineMalIcon, registerIcons } from "https://esm.sh/@mal-icon/web";
  import { fi } from "https://esm.sh/@mal-icon/web/fi";

  registerIcons(fi);
  defineMalIcon();
</script>

<mal-icon name="FiActivity" size="24" title="Status"></mal-icon>
```

Or render imperatively / lazily over a CDN:

```js
import { renderIcon, cdnLoader } from "@mal-icon/web";
import FiActivity from "@mal-icon/web/fi/FiActivity.json" with { type: "json" };

document.body.appendChild(renderIcon(FiActivity, { size: 24, title: "Status" }));

const load = cdnLoader("https://cdn.example.com/mal-icon/fi");
const data = await load("FiActivity");
```

## Theming and styling

Every icon accepts a consistent prop surface:

| Prop             | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `size`           | Width and height (number or CSS length)                 |
| `color`          | Overrides `currentColor`                                |
| `weight`         | Stroke weight: `thin` \| `light` \| `regular` \| `bold` |
| `animate`        | CSS animation: `spin` \| `pulse` \| `beat` \| `bounce`  |
| `secondaryColor` | Multi-tone color, exposed as `--mal-icon-secondary`     |
| `title`          | Accessible label (renders `<title>` and `role="img"`)   |
| `className`      | Additional class names                                  |
| `style`          | Inline styles                                           |

Animations are pure CSS. Inject the keyframes once and they apply only to the
icons that opt in, with a built-in `prefers-reduced-motion` guard:

```tsx
import { ICON_ANIMATIONS_CSS } from "@mal-icon/react";

<style>{ICON_ANIMATIONS_CSS}</style>;
<FiLoader animate="spin" />;
```

## Advanced rendering (React)

```tsx
// SVG sprite
import { SpriteIcon } from "@mal-icon/react";
<SpriteIcon id="fi-activity" href="/sprite/fi.svg" />;

// Dynamic by name, with caching and preloading
import { Icon, cdnLoader, setDefaultIconLoader } from "@mal-icon/react";
setDefaultIconLoader(cdnLoader("https://cdn.example.com/icons"));
<Icon name="FiActivity" />;
```

### React Server Components

Use the hook-free server entry to render icons directly inside Server
Components:

```tsx
import { createServerIcon } from "@mal-icon/react/server";
```

## CLI

```bash
# Generate framework modules from the configured icon sets
mal-icon generate --set fi

# Vendor specific icons into your project
mal-icon add FiActivity FiBell --framework react --out src/icons

# Search the icon catalog (add --semantic for natural-language queries)
mal-icon search arrow
mal-icon search "trash" --semantic

# Turn your own SVG into a component
mal-icon import logo.svg --name BrandLogo --framework react-native

# Produce a license report for the bundled sets
mal-icon licenses --out LICENSES.md
```

## Repository layout

```
packages/
  core/          # framework-agnostic types + theming logic
  react/         # React adapter + generated icons
  react-native/  # React Native adapter (react-native-svg) + generated icons
  vue/           # Vue 3 adapter + generated icons
  svelte/        # Svelte 5 adapter + generated icons
  cli/           # build pipeline (fetch / optimize / generate)
  eslint-plugin/ # lint rules
icons-data/      # pinned source configs + licenses
scripts/         # build, size, and benchmark tooling
test/            # cross-framework parity tests
examples/        # runnable demo apps (React, Next.js, Vue, Nuxt, Svelte, sprite)
```

## Examples

The [`examples/`](./examples) folder contains professionally-designed demo apps
that render the same icon gallery in every supported framework:

| Example                                       | Stack                          |
| --------------------------------------------- | ------------------------------ |
| [`react`](./examples/react)                   | Vite + React 19                |
| [`nextjs`](./examples/nextjs)                 | Next.js App Router (RSC)       |
| [`vue`](./examples/vue)                       | Vite + Vue 3.5                 |
| [`nuxt`](./examples/nuxt)                     | Nuxt 3 (SSR)                   |
| [`svelte`](./examples/svelte)                 | Vite + Svelte 5                |
| [`cdn-sprite`](./examples/cdn-sprite)         | Plain HTML (no build, no deps) |

See [`examples/README.md`](./examples/README.md) for run instructions.

## Development

```bash
bun install        # install dependencies
bun run typecheck  # type-check all packages
bun test           # run the test suite
bun run build      # build ESM + CJS bundles and type declarations
bun run lint       # lint with Biome
bun run size       # enforce the per-icon size budget
bun run generate   # regenerate icon modules from sources
```

## License

MIT
