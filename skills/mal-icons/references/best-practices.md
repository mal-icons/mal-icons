# mal-icons — Best Practices

Guidance for using `@mal-icons/*` well: keep bundles small, render fast, stay
accessible, and respect licensing.

## Tree-shaking & bundle size

- **Prefer per-icon default imports or set-barrel named imports.** Both let
  bundlers drop everything you don't use:
  ```ts
  import FiSearch from "@mal-icons/react/fi/FiSearch"; // per-icon (default)
  import { FiSearch } from "@mal-icons/react/fi"; // set barrel (named)
  ```
- **Avoid `import * as Icons`** or pulling the package root just for one icon in
  size-sensitive code — prefer the set subpath.
- **Don't re-export icons through a local barrel** unless your bundler is
  configured for it; a hand-rolled barrel can defeat tree-shaking.
- **Enable the ESLint plugin** to enforce these automatically:
  `@mal-icons/prefer-named-import` and `@mal-icons/no-unused-icons`. See
  [setup/eslint-plugin.md](setup/eslint-plugin.md).
- Each icon has a strict per-icon gzip budget enforced in CI, so individual
  icons stay tiny — the cost you control is _how many_ you import.

## Choosing a set

- **Feather (`fi`)** — minimal stroke icons; great for clean UI. Supports
  `weight`.
- **Circum (`ci`)** — light, friendly fill icons. (License: MPL-2.0.)
- **Ionicons (`io`)** — the largest set with filled, `-outline`, and `-sharp`
  variants and many brand/logo glyphs. Use `-outline` to pair with stroke UIs.
- **Don't mix visual styles arbitrarily** — pick one set per surface for visual
  consistency; reach into another set only for glyphs the primary set lacks.

## Performance

- Icons render to plain SVG with **no runtime parsing** and **no
  `innerHTML`/`v-html`/`{@html}`** — keep it that way; don't reconstruct icons
  from raw strings.
- Set app-wide defaults via the framework **context** once instead of repeating
  `size`/`color` on every icon.
- For very large grids/lists of the same icon, consider the React **sprite**
  (`SpriteIcon` + `<use href>`) to share one definition.
- For icon names known only at runtime, use **dynamic-by-name** (`Icon` +
  `preloadIcon`) or the **CDN loader**, not a giant static import map.
- Inject `ICON_ANIMATIONS_CSS` **once** globally, not per component.

## Accessibility

- Provide `title` for meaningful icons; it renders `<title>` + `role="img"`.
- Leave decorative icons without `title` — they are `aria-hidden` by default.
- Don't rely on color alone to convey meaning; pair status icons with text.
- Ensure sufficient contrast between icon `color` and its background.

## SSR / RSC

- React/Vue/Svelte adapters are SSR-safe and hydrate correctly.
- In **Next.js App Router**, the main `@mal-icons/react` entry and per-icon
  files are `"use client"`. Import them in client components, or render in
  Server Components via `@mal-icons/react/server` (hook-free, zero client JS).
- Don't `"use client"`-wrap an entire page just to show an icon — isolate it.

## React Native

- CSS-only features (`animate`, `secondaryColor`/`--mal-icons-secondary`) **do
  not** apply natively. Use `react-native-svg` / Reanimated for motion.
- Install and configure the `react-native-svg` peer dependency per Expo/bare
  instructions.

## Versioning & regenerating data

- The reference packs ([icons/\*.json](icons/)) are generated from the library's
  search index. After the library adds icons, regenerate with
  `node scripts/build-packs.mjs` so search stays accurate.
- Pinned upstream versions: Feather 4.29.0, Circum 2.0.2, Ionicons 8.0.13.

## Licensing & attribution

- **Feather** and **Ionicons** are **MIT**.
- **Circum** is **MPL-2.0** — comply with MPL terms when you redistribute the
  Circum (`ci`) glyphs.
- Keep upstream license/attribution notices when shipping icon assets. Check a
  set's license before using it in a closed-source product.

## Security

- Icon data is rendered with safe DOM APIs (`createElementNS`) — never feed
  untrusted SVG strings through `innerHTML` to "add" an icon.
- When using the CDN loader, point it only at trusted origins; the loader
  validates payloads with `isIconData` before rendering.

## Common pitfalls (quick list)

- Trailing slash in a subpath import (`.../fi/`) → "Module not found".
- Named import from a **per-icon** file → type error (use default).
- `animate` with no `ICON_ANIMATIONS_CSS` injected → no animation.
- Importing the package root for one icon in a size-critical bundle.
- Forgetting `react-native-svg` setup on native.
- Expecting CSS animations on React Native.
