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
- **Pure-CSS animations** — `spin`, `pulse`, `beat`, `bounce`, `ping`, `shake`, `wiggle`, `float`, `heartbeat`, `flip`, `rotate`, `zoom`, `fade`, `slide`, `glow`, `swing`, `tada`, with a `prefers-reduced-motion` guard.
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

## Use with AI agents

AI coding agents can add and theme these icons for you via the
[`mal-icons` agent skill](../../skills/mal-icons). Install it with the
[`skills` CLI](https://www.npmjs.com/package/skills):

```bash
npx skills add mal-icons/mal-icons
```

Then ask your agent to "add a trash icon" and it searches the catalog and writes
the correct `@mal-icons/react` import. See the
[React setup guide](../../skills/mal-icons/references/setup/react.md).

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

| Prop             | Type                                                                           | Description                                          |
| ---------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `size`           | `number \| string`                                                             | Width and height (defaults to `1em`)                 |
| `color`          | `string`                                                                       | Overrides `currentColor`                             |
| `weight`         | `"thin" \| "light" \| "regular" \| "bold"`                                     | Stroke weight for stroke-based sets                  |
| `animate`        | `IconAnimation` (`"spin"`, `"pulse"`, `"bounce"`, `"shake"`, `"heartbeat"`, …) | CSS animation preset                                 |
| `secondaryColor` | `string`                                                                       | Multi-tone color, exposed as `--mal-icons-secondary` |
| `title`          | `string`                                                                       | Accessible label (renders `<title>` + `role="img"`)  |
| `className`      | `string`                                                                       | Additional class names                               |
| `style`          | `CSSProperties`                                                                | Inline styles                                        |

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
| [Octicons](https://primer.style/octicons/) | [MIT license](https://github.com/primer/octicons/blob/main/LICENSE) | 19.28.1 |   733 |
| [Typicons](https://www.s-ings.com/typicons/) | [CC BY-SA 4.0 license](https://github.com/stephenhutchings/typicons.font/blob/master/LICENCE.md) | 2.1.2   |   336 |

## Subpath exports

| Import                           | Contents                                 |
| -------------------------------- | ---------------------------------------- |
| `@mal-icons/react`               | Adapter, context, sprite/dynamic helpers |
| `@mal-icons/react/ci`            | All Circum icons (named exports)         |
| `@mal-icons/react/ci/CiHeart`    | A single Circum icon module              |
| `@mal-icons/react/fa`            | All Font Awesome icons (named exports)        |
| `@mal-icons/react/fab`            | All Font Awesome Brands icons (named exports)        |
| `@mal-icons/react/far`            | All Font Awesome Regular icons (named exports)        |
| `@mal-icons/react/fi`            | All Feather icons (named exports)        |
| `@mal-icons/react/fa/FaHeart` | A single icon module                     |
| `@mal-icons/react/fab/FabGithub` | A single icon module                     |
| `@mal-icons/react/far/FarHeart` | A single icon module                     |
| `@mal-icons/react/fi/FiActivity` | A single icon module                     |
| `@mal-icons/react/io`            | All Ionicons (named exports)             |
| `@mal-icons/react/oc`            | All Octicons (named exports)             |
| `@mal-icons/react/io/IoHeart`    | A single Ionicons icon module            |
| `@mal-icons/react/oc/OcHeart16`    | A single Octicons icon module            |
| `@mal-icons/react/ti`            | All Typicons (named exports)             |
| `@mal-icons/react/ti/TiHeart`    | A single Typicons icon module            |
| `@mal-icons/react/server`        | Hook-free Server Component entry         |
| `@mal-icons/react/sprite/ci.svg` | Pre-built Circum sprite asset            |
| `@mal-icons/react/sprite/fa.svg` | Pre-built Font Awesome sprite asset           |
| `@mal-icons/react/sprite/fab.svg` | Pre-built Font Awesome Brands sprite asset           |
| `@mal-icons/react/sprite/far.svg` | Pre-built Font Awesome Regular sprite asset           |
| `@mal-icons/react/sprite/fi.svg` | Pre-built Feather sprite asset           |
| `@mal-icons/react/sprite/io.svg` | Pre-built Ionicons sprite asset          |
| `@mal-icons/react/sprite/oc.svg` | Pre-built Octicons sprite asset          |
| `@mal-icons/react/sprite/ti.svg` | Pre-built Typicons sprite asset          |

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
