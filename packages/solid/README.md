# @mal-icons/solid

[![npm](https://img.shields.io/npm/v/@mal-icons/solid.svg)](https://www.npmjs.com/package/@mal-icons/solid)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

SolidJS adapter for [**mal-icons**](https://github.com/mal-icons/mal-icons) — a
high-performance, tree-shakeable icon SDK. Each icon is a pre-generated Solid
component with fine-grained reactivity and no runtime parsing.

## Highlights

- **Fine-grained reactivity** — built on Solid's `mergeProps` / `useContext`.
- **Tree-shakeable** — every icon is its own module.
- **Themeable** — `IconContext` provider with per-icon overrides.
- **Pure-CSS animations** — `spin`, `pulse`, `beat`, `bounce`, `ping`, `shake`, `wiggle`, `float`, `heartbeat`, `flip`, `rotate`, `zoom`, `fade`, `slide`, `glow`, `swing`, `tada`, with a `prefers-reduced-motion` guard.
- **Accessible** — correct `role` / `aria-hidden` and optional `<title>`.

## Installation

```bash
bun add @mal-icons/solid
# or
npm install @mal-icons/solid
```

> Requires `solid-js` 1.8 or newer (peer dependency).

## Quick start

```tsx
import { FiActivity } from "@mal-icons/solid/fi";

export function Status() {
  return <FiActivity size={24} title="Status" />;
}
```

### App-wide theming

```tsx
import { IconContext } from "@mal-icons/solid";

<IconContext.Provider value={{ size: 20, color: "#3366ff" }}>
  <App />
</IconContext.Provider>;
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
| `title`          | `string`                                                                       | Accessible label                                     |
| `class`          | `string`                                                                       | Additional class names                               |

## Animations

```tsx
import { ICON_ANIMATIONS_CSS } from "@mal-icons/solid";

<style>{ICON_ANIMATIONS_CSS}</style>;
<FiLoader animate="spin" />;
```

## API

```ts
import {
  IconBase,
  createIcon,
  IconContext,
  DefaultIconContext,
  ICON_ANIMATIONS_CSS,
  WEIGHT_STROKE_WIDTH,
  animationClass,
} from "@mal-icons/solid";
```

## Subpath exports

| Import                           | Contents                          |
| -------------------------------- | --------------------------------- |
| `@mal-icons/solid`               | Adapter and context               |
| `@mal-icons/solid/fi`            | All Feather icons (named exports) |
| `@mal-icons/solid/fi/FiActivity` | A single icon module              |

## Example

A Vite + SolidJS 1.9 gallery (signals + provider) lives in
[`examples/solid`](https://github.com/mal-icons/mal-icons/tree/main/examples/solid).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/solid`](https://github.com/mal-icons/mal-icons/tree/main/packages/solid).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
