---
name: mal-icons
description: >-
  Find, import, theme, and troubleshoot icons from the @mal-icons SDK (Feather
  "fi", Circum "ci", Ionicons "io", Font Awesome Free solid "fa" / brands "fab" /
  regular "far", Typicons "ti", Octicons "oc", Devicons "dev" — 6,786 icons) across
  React, Vue, Svelte,
  Solid, Preact, Angular, Astro, vanilla Web, and React Native. Use when a user
  asks to add an icon, pick the right icon for a concept (e.g. "a trash icon",
  "something for notifications"), set up @mal-icons in a framework, theme/size/
  animate icons, or fix an import/SSR/tree-shaking problem.
---

# mal-icons

`@mal-icons/*` is a high-performance, tree-shakeable icon SDK. Every icon is a
**pre-generated component** per framework — no runtime SVG parsing, no
`innerHTML`/`v-html`/`{@html}`, and a strict per-icon size budget. This skill
helps you choose icons and wire them into any supported framework correctly.

## Icon sets

| Set  | Name     | Prefix | Style  | Count | License | viewBox       |
| ---- | -------- | ------ | ------ | ----: | ------- | ------------- |
| `fi` | Feather  | `Fi`   | stroke |   287 | MIT     | `0 0 24 24`   |
| `ci` | Circum   | `Ci`   | fill   |   288 | MPL-2.0 | `0 0 24 24`   |
| `io` | Ionicons | `Io`   | fill   |  1357 | MIT     | `0 0 512 512` |
| `fa` | Font Awesome Free | `Fa` | fill | 1402 | CC-BY-4.0 | `0 0 512 512` |
| `fab` | Font Awesome Free Brands | `Fab` | fill | 495 | CC-BY-4.0 | `0 0 512 512` |
| `far` | Font Awesome Free Regular | `Far` | fill | 163 | CC-BY-4.0 | `0 0 512 512` |
| `ti` | Typicons | `Ti`   | fill   |   336 | CC-BY-SA-4.0 | `0 0 24 24`   |
| `oc` | Octicons | `Oc`   | fill   |   733 | MIT     | `0 0 16 16`   |
| `dev` | Devicons | `Dev` | fill  |  1725 | MIT     | `0 0 600 600` |

Component names are PascalCase with the set prefix: `FiActivity`, `CiHeart`,
`IoHeartOutline`. Ionicons ships filled, `-outline`, and `-sharp` variants
(`IoHeart`, `IoHeartOutline`, `IoHeartSharp`). Octicons ship size variants, so
their component names keep the pixel-size suffix (`OcAlert16`, `OcAlert24`).
Devicons are developer brand logos; many ship a plain and an `Icon` variant
(`DevReact`, `DevReactIcon`).

## Finding an icon

When a user describes a concept ("a gear", "something for delete"), search the
bundled packs instead of guessing names:

```bash
node scripts/search.js "trash" --limit 5
node scripts/search.js gear --set fi
node scripts/search.js "shopping cart" --json
```

The CLI matches **name + tags + description** and expands everyday synonyms
(`gear`→settings, `house`→home, `bin`→trash, `like`→heart). Each set's full
catalog (name, tags, description) lives in:

- [references/icons/fi.json](references/icons/fi.json) · [fi.md](references/icons/fi.md) — Feather
- [references/icons/ci.json](references/icons/ci.json) · [ci.md](references/icons/ci.md) — Circum
- [references/icons/io.json](references/icons/io.json) · [io.md](references/icons/io.md) — Ionicons
- [references/icons/fa.json](references/icons/fa.json) · [fa.md](references/icons/fa.md) — Font Awesome Free
- [references/icons/fab.json](references/icons/fab.json) · [fab.md](references/icons/fab.md) — Font Awesome Free Brands
- [references/icons/far.json](references/icons/far.json) · [far.md](references/icons/far.md) — Font Awesome Free Regular
- [references/icons/ti.json](references/icons/ti.json) · [ti.md](references/icons/ti.md) — Typicons
- [references/icons/oc.json](references/icons/oc.json) · [oc.md](references/icons/oc.md) — Octicons
- [references/icons/dev.json](references/icons/dev.json) · [dev.md](references/icons/dev.md) — Devicons

Prefer the JSON packs for programmatic lookups; the `.md` tables are for
human browsing. Regenerate both with `node scripts/build-packs.mjs`.

## Importing icons — 3 supported styles

1. **Per-icon (default import, best tree-shaking)** — the per-icon file has a
   **default export only**:
   ```ts
   import FiSearch from "@mal-icons/react/fi/FiSearch";
   ```
2. **Set barrel (named import)**:
   ```ts
   import { FiSearch } from "@mal-icons/react/fi";
   ```
3. **Package root (named import)**:
   ```ts
   import { FiSearch } from "@mal-icons/react";
   ```

A per-icon **named** import (`import { FiSearch } from ".../fi/FiSearch"`) is a
type error by design. A trailing slash (`.../fi/`) resolves nothing — drop it.
Swap `react` for any package: `vue`, `svelte`, `solid`, `preact`, `angular`,
`astro`, `web`, `react-native`.

## Theming, sizing, animation (quick reference)

- Common props: `size`, `color`, `weight` (`"thin" | "light" | "regular" | "bold"`,
  stroke sets), `title` (a11y), `className`/`class`.
- DOM adapters also support `animate` (`"spin"`, `"pulse"`, `"bounce"`,
  `"shake"`, `"heartbeat"`, …) and `secondaryColor` (`--mal-icons-secondary`).
- Color comes from `currentColor` unless `color` is set. Inject
  `ICON_ANIMATIONS_CSS` once to enable `animate`.
- App-wide defaults use each framework's context helper; per-icon props always
  win. See the per-framework guide for the exact API.

## Per-framework setup guides

| Framework     | Guide                                                                  |
| ------------- | ---------------------------------------------------------------------- |
| React         | [references/setup/react.md](references/setup/react.md)                 |
| Vue 3         | [references/setup/vue.md](references/setup/vue.md)                     |
| Svelte 5      | [references/setup/svelte.md](references/setup/svelte.md)               |
| Solid         | [references/setup/solid.md](references/setup/solid.md)                 |
| Preact        | [references/setup/preact.md](references/setup/preact.md)               |
| Angular       | [references/setup/angular.md](references/setup/angular.md)             |
| Astro         | [references/setup/astro.md](references/setup/astro.md)                 |
| Web (vanilla) | [references/setup/web.md](references/setup/web.md)                     |
| React Native  | [references/setup/react-native.md](references/setup/react-native.md)   |
| ESLint plugin | [references/setup/eslint-plugin.md](references/setup/eslint-plugin.md) |

## Deeper guides

- [references/usage.md](references/usage.md) — end-to-end user guide: theming,
  animations, sprites, dynamic-by-name, CDN, SSR/RSC.
- [references/best-practices.md](references/best-practices.md) — tree-shaking,
  performance, accessibility, licensing, and common pitfalls.

## When helping a user

1. If they describe a concept, run `scripts/search.js` and propose 2–3 named
   matches (with set) before writing code.
2. Use the package that matches their framework; default to per-icon or set
   barrel imports for tree-shaking.
3. Open the relevant `references/setup/<framework>.md` for the exact API.
4. Respect licensing: Circum (`ci`) is MPL-2.0; Font Awesome Free (`fa`, `fab`, `far`) is CC-BY-4.0; Typicons (`ti`) is CC-BY-SA-4.0; Feather/Ionicons/Octicons/Devicons are MIT.
