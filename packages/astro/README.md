# @mal-icons/astro

[![npm](https://img.shields.io/npm/v/@mal-icons/astro.svg)](https://www.npmjs.com/package/@mal-icons/astro)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

Astro adapter for [**mal-icons**](https://github.com/mal-icons/mal-icons) — a
high-performance icon SDK. Each icon is a pre-generated `.astro` component that
renders to **static SVG at build time** and ships **zero JavaScript**.

## Highlights

- **Zero runtime** — icons render at build time; nothing is shipped to the client.
- **Per-component props** — there is no runtime context, so theming is configured via props.
- **Accessible** — correct `role` / `aria-hidden` and optional `<title>`.

## Installation

```bash
bun add @mal-icons/astro
# or
npm install @mal-icons/astro
```

> Requires Astro 4 or newer (peer dependency).

## Quick start

Import the `.astro` icon component directly and use it in your markup:

```astro
---
import FiActivity from "@mal-icons/astro/fi/FiActivity.astro";
---

<FiActivity size={24} title="Status" />
```

> Because Astro components render at build time and have no runtime context,
> theming is configured **per component** via props rather than a shared provider.

## Props

| Prop    | Type               | Description                          |
| ------- | ------------------ | ------------------------------------ |
| `size`  | `number \| string` | Width and height (defaults to `1em`) |
| `color` | `string`           | Overrides `currentColor`             |
| `title` | `string`           | Accessible label                     |
| `class` | `string`           | Additional class names               |

## Subpath exports

| Import                                 | Contents                  |
| -------------------------------------- | ------------------------- |
| `@mal-icons/astro/fi/FiActivity.astro` | A single icon component   |
| `@mal-icons/astro/IconBase.astro`      | The shared base component |

## Example

A static, zero-JS Astro site rendering the shared gallery lives in
[`examples/astro`](https://github.com/mal-icons/mal-icons/tree/main/examples/astro).

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/astro`](https://github.com/mal-icons/mal-icons/tree/main/packages/astro).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
