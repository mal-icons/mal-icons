# @mal-icons/core

[![npm](https://img.shields.io/npm/v/@mal-icons/core.svg)](https://www.npmjs.com/package/@mal-icons/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

The framework-agnostic foundation of [**mal-icons**](https://github.com/mal-icons/mal-icons) —
shared TypeScript types and theming utilities used by every framework adapter
(React, Vue, Svelte, Preact, Solid, Angular, Astro, React Native, and the web
renderer).

You normally don't install this package directly — it ships as a dependency of
each adapter. Install it only when you are **building your own adapter** or
need the shared types and theming primitives in framework-neutral code.

## Why it exists

Every mal-icons adapter renders the **same SVG markup** from the **same data
model**. `@mal-icons/core` is where that contract lives:

- One serializable icon data model (`IconData`, `IconNode`, `NodeTuple`).
- One prop surface (`IconBaseProps`) and theming contract (`IconContextValue`).
- One override-resolution rule (`resolveIconAttrs`) so per-icon props always
  beat context.
- One set of differentiators: stroke `weight` presets and pure-CSS animations.

There is **no runtime dependency** and **no framework code** — just types and a
few tiny pure functions.

## Installation

```bash
bun add @mal-icons/core
# or
npm install @mal-icons/core
```

## What's inside

### Types

| Export                 | Description                                                                                                                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IconNode`             | Recursive `{ tag, attr, child }` build-time icon shape                                                                                                                                                     |
| `NodeTuple`            | Compact `[tag, attr]` tuple used at render time                                                                                                                                                            |
| `IconData`             | Minimal `{ viewBox, nodes, defaultAttr? }` render payload                                                                                                                                                  |
| `IconDefinition`       | Fully-described, deduplicatable icon (used by the pipeline)                                                                                                                                                |
| `IconBaseProps<St>`    | Props every generated icon component accepts                                                                                                                                                               |
| `IconContextValue<St>` | Theming values supplied through a framework provider                                                                                                                                                       |
| `IconsManifest`        | Top-level manifest describing all available icon sets                                                                                                                                                      |
| `IconWeight`           | `"thin" \| "light" \| "regular" \| "bold"`                                                                                                                                                                 |
| `IconAnimation`        | `"spin" \| "spin-reverse" \| "pulse" \| "beat" \| "bounce" \| "ping" \| "shake" \| "wiggle" \| "float" \| "heartbeat" \| "flip" \| "rotate" \| "zoom" \| "fade" \| "slide" \| "glow" \| "swing" \| "tada"` |

### Utilities

```ts
import {
  resolveIconAttrs,
  WEIGHT_STROKE_WIDTH,
  animationClass,
  ICON_ANIMATIONS_CSS,
} from "@mal-icons/core";

// Merge per-icon props over context, following the override priority:
//   props.color > context.color
//   props.size  > context.size > "1em"
const { size, color, className } = resolveIconAttrs(
  { size: 24, color: "#3366ff" },
  { size: 20 },
);

// Map a stroke weight preset to a concrete stroke-width.
WEIGHT_STROKE_WIDTH.bold; // 3

// Class name applied to the <svg> for a CSS animation.
animationClass("spin"); // "mal-icons-animate-spin"

// Inject once to enable the CSS animation presets (with a built-in
// prefers-reduced-motion guard).
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>${ICON_ANIMATIONS_CSS}</style>`,
);
```

## Building your own adapter

A framework adapter only needs to:

1. Read theming from `IconContextValue` via the framework's context/provider.
2. Call `resolveIconAttrs(props, context)` to compute the final attributes.
3. Render an `<svg viewBox={data.viewBox}>` and map `data.nodes` to elements.

That's the entire contract — the generated icon modules supply the `IconData`.

## Repository

Source, issues, and contribution guidelines live in the monorepo:
<https://github.com/mal-icons/mal-icons> · package directory
[`packages/core`](https://github.com/mal-icons/mal-icons/tree/main/packages/core).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
