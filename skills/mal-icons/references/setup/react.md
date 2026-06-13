# Setup — React (`@mal-icons/react`)

React adapter. Each icon is a pre-generated component — no runtime tree-walking,
no JSON parsing on render, no `dangerouslySetInnerHTML`.

## Install

```bash
bun add @mal-icons/react
# or
npm install @mal-icons/react
```

> Peer dependency: `react >=18`.

## Quick start

```tsx
import { FiActivity } from "@mal-icons/react/fi";

export function Status() {
  return <FiActivity size={24} color="currentColor" title="Status" />;
}
```

## Import styles

```tsx
import FiSearch from "@mal-icons/react/fi/FiSearch"; // per-icon (default only)
import { FiSearch } from "@mal-icons/react/fi"; // set barrel (named)
import { FiSearch } from "@mal-icons/react"; // package root (named)
```

Per-icon files are default-only; a named per-icon import is a type error. No
trailing slash on subpaths.

## Props

| Prop             | Type                                       | Notes                               |
| ---------------- | ------------------------------------------ | ----------------------------------- |
| `size`           | `number \| string`                         | Width/height, default `1em`         |
| `color`          | `string`                                   | Overrides `currentColor`            |
| `weight`         | `"thin" \| "light" \| "regular" \| "bold"` | Stroke sets (`fi`)                  |
| `animate`        | `IconAnimation`                            | CSS preset (`"spin"`, `"pulse"`, …) |
| `secondaryColor` | `string`                                   | `--mal-icons-secondary`             |
| `title`          | `string`                                   | a11y label (`<title>` + `role`)     |
| `className`      | `string`                                   | Extra classes                       |
| `style`          | `CSSProperties`                            | Inline styles                       |

## App-wide theming

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

Per-icon props always override context.

## Animations

```tsx
import { ICON_ANIMATIONS_CSS } from "@mal-icons/react";

<style>{ICON_ANIMATIONS_CSS}</style>
<FiLoader animate="spin" />
```

Inject `ICON_ANIMATIONS_CSS` once. A `prefers-reduced-motion` guard is built in.

## Advanced rendering

```tsx
// SVG sprite (<use href>)
import { SpriteIcon } from "@mal-icons/react";
<SpriteIcon set="fi" name="FiActivity" />;

// Dynamic by name (SSR-safe with preload + cache)
import { Icon, preloadIcon } from "@mal-icons/react";
await preloadIcon("fi", "FiActivity");
<Icon set="fi" name="FiActivity" />;
```

## Server Components (Next.js App Router)

The main entry and per-icon files are `"use client"`. To render inside a Server
Component with zero client JS, use the hook-free server entry:

```tsx
import { createServerIcon } from "@mal-icons/react/server";
```

Otherwise import icons inside a client component.

## Pitfalls

- Named per-icon import → type error (use default).
- `.../fi/` trailing slash → "Module not found".
- `animate` without `ICON_ANIMATIONS_CSS` → no animation.
- `createContext only works in Client Components` → import in a client
  component or use `/server`.
