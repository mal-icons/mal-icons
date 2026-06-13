# mal-icons — User Guide

End-to-end guide to using `@mal-icons/*` in your app: choosing icons, importing,
theming, animating, and the advanced delivery options (sprites, dynamic-by-name,
CDN, SSR/RSC). For framework-specific setup, see
[setup/](setup/). For do's and don'ts, see [best-practices.md](best-practices.md).

## 1. Pick a package

Install the adapter for your framework — the icon API is shared across all of
them:

| Framework     | Package                   | Peer dependency                                              |
| ------------- | ------------------------- | ------------------------------------------------------------ |
| React         | `@mal-icons/react`        | `react >=18`                                                 |
| Vue 3         | `@mal-icons/vue`          | `vue >=3.3`                                                  |
| Svelte 5      | `@mal-icons/svelte`       | `svelte >=5`                                                 |
| Solid         | `@mal-icons/solid`        | `solid-js >=1.8`                                             |
| Preact        | `@mal-icons/preact`       | `preact >=10`                                                |
| Angular       | `@mal-icons/angular`      | `@angular/core >=16`                                         |
| Astro         | `@mal-icons/astro`        | `astro >=4`                                                  |
| Web (vanilla) | `@mal-icons/web`          | none                                                         |
| React Native  | `@mal-icons/react-native` | `react >=18`, `react-native >=0.70`, `react-native-svg >=13` |

```bash
bun add @mal-icons/react   # or npm install @mal-icons/react
```

`@mal-icons/core` (shared types + `ICON_ANIMATIONS_CSS`) installs automatically
as a dependency of each adapter.

## 2. Find the right icon

Use the bundled search helper rather than guessing component names:

```bash
node scripts/search.js "notification"      # → FiBell, IoNotifications, …
node scripts/search.js delete --set fi      # → FiTrash2, FiX, …
node scripts/search.js "shopping cart"      # → IoCart, …
node scripts/search.js gear --json          # machine-readable output
```

It searches **name + tags + description** over all three sets and expands
everyday synonyms (`gear`→settings, `house`→home, `bin`→trash, `like`→heart,
`photo`→image/camera). Browse a full set in
[icons/fi.md](icons/fi.md), [icons/ci.md](icons/ci.md), or
[icons/io.md](icons/io.md).

## 3. Import an icon

Three styles are supported everywhere (replace `react` with your package):

```ts
// 1. Per-icon, DEFAULT import — best tree-shaking, no barrel evaluation
import FiSearch from "@mal-icons/react/fi/FiSearch";

// 2. Set barrel, NAMED import
import { FiSearch } from "@mal-icons/react/fi";

// 3. Package root, NAMED import
import { FiSearch } from "@mal-icons/react";
```

Notes:

- Per-icon files are **default-only**. `import { FiSearch } from ".../fi/FiSearch"`
  is a deliberate type error.
- Don't add a trailing slash (`.../fi/`) — it matches no export.
- Svelte per-icon files keep the `.svelte` extension:
  `@mal-icons/svelte/fi/FiActivity.svelte`.
- Astro is per-component `.astro` only:
  `@mal-icons/astro/fi/FiActivity.astro`.
- Web ships JSON payloads: `@mal-icons/web/fi/FiActivity.json`.

## 4. Size and color

Every icon accepts `size` and `color`:

```tsx
<FiActivity size={24} color="#3366ff" />
<FiActivity size="1.5em" />              // string sizes allowed
```

- Default size is `1em`, so icons scale with surrounding font size.
- Color is `currentColor` by default — set CSS `color` on a parent, or pass the
  `color` prop to override.

## 5. App-wide theming (context)

Set defaults once; per-icon props always override them. The helper differs per
framework:

| Framework       | Set defaults                                  |
| --------------- | --------------------------------------------- |
| React/Preact/RN | `<IconContext.Provider value={{…}}>`          |
| Solid           | `<IconContext.Provider value={{…}}>`          |
| Vue             | `provideIconContext({…})` in a parent `setup` |
| Svelte          | `setIconContext({…})` in a parent component   |
| Angular         | provide `ICON_CONTEXT` with a value           |
| Astro           | no runtime context — pass props per component |

```tsx
// React
import { IconContext } from "@mal-icons/react";
<IconContext.Provider value={{ size: 20, color: "#3366ff" }}>
  <App />
</IconContext.Provider>;
```

## 6. Stroke weight

Stroke sets (Feather `fi`) honor a `weight` prop:

```tsx
<FiActivity weight="bold" /> // "thin" | "light" | "regular" | "bold"
```

Fill sets (`ci`, `io`) ignore `weight` for filled glyphs.

## 7. Animations (DOM adapters)

Animations are pure CSS. Inject the keyframes once, then opt in per icon:

```tsx
import { ICON_ANIMATIONS_CSS } from "@mal-icons/core";

<style>{ICON_ANIMATIONS_CSS}</style>
<FiLoader animate="spin" />
```

Presets: `spin`, `pulse`, `beat`, `bounce`, `ping`, `shake`, `wiggle`, `float`,
`heartbeat`, `flip`, `rotate`, `zoom`, `fade`, `slide`, `glow`, `swing`, `tada`.
A `prefers-reduced-motion` guard disables them automatically. **React Native**
has no CSS — use `react-native-svg`/Reanimated instead.

## 8. Multi-tone

Two-tone icons read a secondary color from `--mal-icons-secondary`:

```tsx
<MlIconLogo secondaryColor="#88aaff" />
```

## 9. Accessibility

- Pass `title` for a meaningful label — it renders `<title>` and `role="img"`.
- Omit `title` for purely decorative icons; they are `aria-hidden`.

```tsx
<FiAlertTriangle title="Warning" />   // announced
<FiChevronRight />                      // decorative, hidden
```

## 10. Advanced delivery (React)

- **Sprites** — `import { SpriteIcon } from "@mal-icons/react"` renders
  `<use href>` against a bundled `sprite/<set>.svg`.
- **Dynamic by name** — `import { Icon } from "@mal-icons/react"` with
  `preloadIcon`/cache for SSR-safe name-based rendering.
- **CDN loader** — fetch JSON icon data at runtime with validation (no
  `innerHTML`).
- **Server Components** — `@mal-icons/react/server` exposes a hook-free entry
  (`IconBaseServer`, `createServerIcon`) for RSC with zero client JS. The main
  React entry and per-icon files are `"use client"`.

See [setup/react.md](setup/react.md) for code.

## 11. Vanilla web / no build

```html
<script type="module">
  import { defineMalIcon, registerIcons } from "https://esm.sh/@mal-icons/web";
  import { fi } from "https://esm.sh/@mal-icons/web/fi";
  registerIcons(fi);
  defineMalIcon();
</script>

<mal-icons name="FiActivity" size="24" title="Status"></mal-icons>
```

The `<mal-icons>` element observes its attributes and re-renders. Shapes are
built with `document.createElementNS` — never `innerHTML` — so CDN data is safe.
See [setup/web.md](setup/web.md).

## 12. SSR

- React/Vue/Svelte adapters render to static markup on the server and hydrate.
- Next.js App Router: import client icon components in client components, or use
  the `@mal-icons/react/server` entry inside Server Components.
- Nuxt/SvelteKit/Astro all render server-side out of the box.

## Troubleshooting

| Symptom                                                | Fix                                                           |
| ------------------------------------------------------ | ------------------------------------------------------------- |
| `Module not found … /fi/`                              | Remove the trailing slash.                                    |
| `has no exported member 'FiX'` on a per-icon import    | Use a **default** import for per-icon files.                  |
| `animate` does nothing                                 | Inject `ICON_ANIMATIONS_CSS` once.                            |
| `createContext only works in Client Components` (Next) | Import the icon in a client component, or use `/server`.      |
| Icon doesn't change color                              | Set CSS `color` on a parent or pass the `color` prop.         |
| Bundle too large                                       | Use per-icon or set-barrel imports; enable the ESLint plugin. |
