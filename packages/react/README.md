# @mal-icons/react

[![npm](https://img.shields.io/npm/v/@mal-icons/react.svg)](https://www.npmjs.com/package/@mal-icons/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

React adapter for [**mal-icons**](https://github.com/mal-icons/mal-icons) — a
high-performance, tree-shakeable icon SDK. Each icon is a pre-generated
component, so there is **no runtime tree-walking**, **no JSON parsing on
render**, and **no `dangerouslySetInnerHTML`**.

## Highlights

- **Tree-shakeable** — every icon is its own module; bundlers keep only what you import.
- **Tiny** — a strict per-icon budget (< 0.8 KB gzipped) is enforced in CI.
- **Themeable** — `size`, `color`, `weight`, and `className` resolved through `IconContext`, with per-icon overrides.
- **Pure-CSS animations** — `spin`, `pulse`, `beat`, `bounce`, with a `prefers-reduced-motion` guard.
- **Advanced delivery** — SVG sprites, dynamic-by-name loading with caching/preloading, and CDN loaders.
- **Server Components** — a hook-free `/server` entry renders icons in RSC with zero client JS.
- **Accessible** — correct `role` / `aria-hidden` handling and optional `<title>`.

## Installation

```bash
bun add @mal-icons/react
# or
npm install @mal-icons/react
```

> Requires React 18 or newer (peer dependency).

## Quick start

Import icons directly from the set subpath (`/fi` = Feather):

```tsx
import { FiActivity } from "@mal-icons/react/fi";

export function Status() {
  return <FiActivity size={24} color="currentColor" title="Status" />;
}
```

### App-wide theming

```tsx
import { IconContext } from "@mal-icons/react";

export function App() {
  return (
    <IconContext.Provider value={{ size: 20, color: "#3366ff" }}>
      <Toolbar />
    </IconContext.Provider>
  );
}
```

Per-icon props always override context values.

## Props

| Prop             | Type                                       | Description                                          |
| ---------------- | ------------------------------------------ | ---------------------------------------------------- |
| `size`           | `number \| string`                         | Width and height (defaults to `1em`)                 |
| `color`          | `string`                                   | Overrides `currentColor`                             |
| `weight`         | `"thin" \| "light" \| "regular" \| "bold"` | Stroke weight for stroke-based sets                  |
| `animate`        | `"spin" \| "pulse" \| "beat" \| "bounce"`  | CSS animation preset                                 |
| `secondaryColor` | `string`                                   | Multi-tone color, exposed as `--mal-icons-secondary` |
| `title`          | `string`                                   | Accessible label (renders `<title>` + `role="img"`)  |
| `className`      | `string`                                   | Additional class names                               |
| `style`          | `CSSProperties`                            | Inline styles                                        |

## Animations

Animations are pure CSS. Inject the keyframes once and they apply only to icons
that opt in:

```tsx
import { ICON_ANIMATIONS_CSS } from "@mal-icons/react";

<style>{ICON_ANIMATIONS_CSS}</style>;
<FiLoader animate="spin" />;
```

## Advanced rendering

### SVG sprite

```tsx
import { SpriteIcon } from "@mal-icons/react";

<SpriteIcon id="fi-activity" href="/sprite/fi.svg" />;
```

### Dynamic by name (caching + preload)

```tsx
import {
  Icon,
  cdnLoader,
  setDefaultIconLoader,
  preloadIcon,
} from "@mal-icons/react";

setDefaultIconLoader(cdnLoader("https://cdn.example.com/icons"));
preloadIcon("FiActivity"); // optional warm-up

<Icon name="FiActivity" size={24} />;
```

### React Server Components

The `/server` entry is hook-free and renders directly inside Server Components:

```tsx
import { createServerIcon } from "@mal-icons/react/server";
```

## API

```ts
import {
  IconBase,
  createIcon,
  SpriteIcon,
  Icon,
  cdnLoader,
  setLoader,
  setDefaultIconLoader,
  preloadIcon,
  clearIconCache,
  IconContext,
  DefaultIconContext,
  ICON_ANIMATIONS_CSS,
  WEIGHT_STROKE_WIDTH,
  animationClass,
} from "@mal-icons/react";
```

## Subpath exports

| Import                           | Contents                                 |
| -------------------------------- | ---------------------------------------- |
| `@mal-icons/react`               | Adapter, context, sprite/dynamic helpers |
| `@mal-icons/react/fi`            | All Feather icons (named exports)        |
| `@mal-icons/react/fi/FiActivity` | A single icon module                     |
| `@mal-icons/react/server`        | Hook-free Server Component entry         |
| `@mal-icons/react/sprite/fi.svg` | Pre-built sprite asset                   |

## Example

A complete Vite + React 19 gallery — context theming, weights, animations, and
live search — lives in
[`examples/react`](https://github.com/mal-icons/mal-icons/tree/main/examples/react).
A Next.js App Router (RSC) demo lives in
[`examples/nextjs`](https://github.com/mal-icons/mal-icons/tree/main/examples/nextjs).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/react`](https://github.com/mal-icons/mal-icons/tree/main/packages/react).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs.
Source icon sets may carry their own licenses — use `mal-icons licenses` from
the CLI when shipping bundled sets.
