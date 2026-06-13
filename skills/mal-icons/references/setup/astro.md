# Setup — Astro (`@mal-icons/astro`)

Astro adapter. Each icon is a pre-generated `.astro` component that renders to
**static SVG at build time** and ships **zero JavaScript**. There is no runtime
context — theming is per component via props.

## Install

```bash
bun add @mal-icons/astro
# or
npm install @mal-icons/astro
```

> Peer dependency: `astro >=4`.

## Quick start

Import the `.astro` icon component directly:

```astro
---
import FiActivity from "@mal-icons/astro/fi/FiActivity.astro";
---

<FiActivity size={24} title="Status" />
```

## Import style

Astro is **per-component only** (default import of the `.astro` file):

```astro
import FiActivity from "@mal-icons/astro/fi/FiActivity.astro";
import CiHeart   from "@mal-icons/astro/ci/CiHeart.astro";
import IoHeart   from "@mal-icons/astro/io/IoHeart.astro";
import IconBase  from "@mal-icons/astro/IconBase.astro";
```

## Props

| Prop    | Type               | Notes                    |
| ------- | ------------------ | ------------------------ |
| `size`  | `number \| string` | Default `1em`            |
| `color` | `string`           | Overrides `currentColor` |
| `title` | `string`           | a11y label               |
| `class` | `string`           | Extra classes            |

## Theming

No runtime provider exists. Pass `size`/`color` per component, or wrap groups of
icons in an element with a CSS `color` so `currentColor` cascades:

```astro
<span style="color:#3366ff">
  <FiActivity />
  <FiBell />
</span>
```

## Pitfalls

- Import the `.astro` component directly — there are no set barrels.
- No runtime context/animation; for interactivity use a different adapter inside
  an Astro island.
