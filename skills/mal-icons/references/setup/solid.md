# Setup — Solid (`@mal-icons/solid`)

SolidJS adapter. Each icon is a pre-generated Solid component rendering plain
SVG. The API mirrors the React adapter (context provider + per-icon props).

## Install

```bash
bun add @mal-icons/solid
# or
npm install @mal-icons/solid
```

> Peer dependency: `solid-js >=1.8`.

## Quick start

```tsx
import { FiActivity } from "@mal-icons/solid/fi";

export function Status() {
  return <FiActivity size={24} title="Status" />;
}
```

## Import styles

```ts
import FiSearch from "@mal-icons/solid/fi/FiSearch"; // per-icon (default only)
import { FiSearch } from "@mal-icons/solid/fi"; // set barrel (named)
import { FiSearch } from "@mal-icons/solid"; // package root (named)
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

## App-wide theming

```tsx
import { IconContext } from "@mal-icons/solid";

<IconContext.Provider value={{ size: 20, color: "#3366ff" }}>
  <App />
</IconContext.Provider>;
```

Props from `mergeProps`/context are overridden by per-icon props.

## Animations

```tsx
import { ICON_ANIMATIONS_CSS } from "@mal-icons/core";

<style>{ICON_ANIMATIONS_CSS}</style>
<FiLoader animate="spin" />
```

## Pitfalls

- Named per-icon import → type error (use default).
- `.../fi/` trailing slash → "Module not found".
- `animate` without `ICON_ANIMATIONS_CSS` → no animation.
