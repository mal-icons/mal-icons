---
name: mal-icons
description: >-
  Find, import, theme, and troubleshoot icons from the @mal-icons SDK (Feather
  "fi", Circum "ci", Ionicons "io", Lucide "lu", Font Awesome Free solid "fa" / brands "fab" /
  regular "far", Typicons "ti", Octicons "oc", Devicons "dev", Weather Icons "wi",
  Ant Design "ad", Flat Color Icons "fc", Game Icons "gi", Grommet "gr", Heroicons "hi", Simple Line Icons "sl", css.gg "cg", Codicons "vsc", Themify "tf", Radix Icons "rx", Remix Icon "ri", Simple Icons "si", Bootstrap Icons "bs", Material Icons Filled "mdf" / Rounded "mdr" / Sharp "mds" / Two Tone "mdt", Material Symbols Outlined "mso" / Rounded "msr" / Sharp "mss" — 42,850 icons) across
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
| `lu` | Lucide   | `Lu`   | stroke |  1727 | ISC     | `0 0 24 24`   |
| `fa` | Font Awesome Free | `Fa` | fill | 1402 | CC-BY-4.0 | `0 0 512 512` |
| `fab` | Font Awesome Free Brands | `Fab` | fill | 495 | CC-BY-4.0 | `0 0 512 512` |
| `far` | Font Awesome Free Regular | `Far` | fill | 163 | CC-BY-4.0 | `0 0 512 512` |
| `ti` | Typicons | `Ti`   | fill   |   336 | CC-BY-SA-4.0 | `0 0 24 24`   |
| `oc` | Octicons | `Oc`   | fill   |   733 | MIT     | `0 0 16 16`   |
| `dev` | Devicons | `Dev` | fill  |  1725 | MIT     | `0 0 600 600` |
| `wi` | Weather Icons | `Wi` | fill |   219 | OFL-1.1 | `0 0 30 30`   |
| `ad` | Ant Design Icons | `Ad` | fill |   420 | MIT | `0 0 1024 1024` |
| `fc` | Flat Color Icons | `Fc` | color |   312 | CC-BY-4.0 | `0 0 48 48` |
| `gi` | Game Icons | `Gi` | fill | 4180 | CC-BY-3.0 | `0 0 512 512` |
| `gr` | Grommet  | `Gr`   | stroke |   637 | Apache-2.0 | `0 0 24 24` |
| `rx` | Radix Icons | `Rx` | fill | 318 | MIT | `0 0 15 15` |
| `tf` | Themify | `Tf` | fill | 352 | OFL-1.1 | `0 0 17 17` |
| `vsc` | Codicons | `Vsc` | fill | 604 | CC-BY-4.0 | `0 0 16 16` |
| `cg` | css.gg | `Cg` | fill | 704 | MIT | `0 0 24 24` |
| `sl` | Simple Line Icons | `Sl` | fill | 189 | MIT | `0 0 1024 1024` |
| `ri` | Remix Icon | `Ri` | fill | 3058 | Apache-2.0 | `0 0 24 24` |
| `si` | Simple Icons | `Si` | fill | 3442 | CC0-1.0 | `0 0 24 24` |
| `hi` | Heroicons | `Hi` | stroke | 324 | MIT | `0 0 24 24` |
| `bs` | Bootstrap Icons | `Bs` | fill | 2078 | MIT | `0 0 16 16` |
| `mdf` | Material Icons Filled | `Mdf` | fill | 2122 | Apache-2.0 | `0 0 24 24` |
| `mdr` | Material Icons Rounded | `Mdr` | fill | 2122 | Apache-2.0 | `0 0 24 24` |
| `mds` | Material Icons Sharp | `Mds` | fill | 2122 | Apache-2.0 | `0 0 24 24` |
| `mdt` | Material Icons Two Tone | `Mdt` | fill | 2122 | Apache-2.0 | `0 0 24 24` |
| `mso` | Material Symbols Outlined | `Mso` | fill | 3004 | Apache-2.0 | `0 -960 960 960` |
| `msr` | Material Symbols Rounded | `Msr` | fill | 3004 | Apache-2.0 | `0 -960 960 960` |
| `mss` | Material Symbols Sharp | `Mss` | fill | 3004 | Apache-2.0 | `0 -960 960 960` |

Component names are PascalCase with the set prefix: `FiActivity`, `CiHeart`,
`IoHeartOutline`. Ionicons ships filled, `-outline`, and `-sharp` variants
(`IoHeart`, `IoHeartOutline`, `IoHeartSharp`). Octicons ship size variants, so
their component names keep the pixel-size suffix (`OcAlert16`, `OcAlert24`).
Devicons are developer brand logos; many ship a plain and an `Icon` variant
(`DevReact`, `DevReactIcon`). Weather Icons cover weather, maritime, and
meteorological concepts (`WiDaySunny`, `WiThunderstorm`); the redundant `wi-`
filename prefix is dropped from component names. Ant Design icons are clean
outlined UI glyphs (`AdHome`, `AdSetting`, `AdSearch`). Lucide is a large
Feather fork of stroke-based 24×24 icons (`LuActivity`, `LuSearch`). Flat Color
Icons (`fc`) are multi-color flat glyphs (`FcAbout`, `FcSearch`): each shape keeps
its own baked color, so they render as-is and are **not** themed via `color`.
Grommet (`gr`) is a stroke-based 24×24 set that also bundles brand marks
(`GrHome`, `GrGithub`, `GrAmazon`); brand icons render single-color via `color`.
Game Icons (`gi`) are 4180 detailed game/fantasy/RPG glyphs from game-icons.net
(`GiSwordWound`, `GiDragonHead`, `GiHealthPotion`, `GiShield`); each is a single
`currentColor` fill on a 512×512 canvas (the original black backdrop is stripped),
themed via `color`.
Material Icons are Google's Material Icons from fonts.google.com/icons — 24×24
glyphs that paint with `currentColor` and theme via `color`. They ship in four
styles under their own prefixes: Filled (`mdf`/`MdfHome`), Rounded
(`mdr`/`MdrHome`), Sharp (`mds`/`MdsHome`), and Two Tone (`mdt`/`MdtHome`, a solid
layer plus a 30%-opacity layer). Material Symbols are the newer, larger Google set
(weight 400) in Outlined (`mso`/`MsoHome`), Rounded (`msr`/`MsrHome`), and Sharp
(`mss`/`MssHome`); they use a `0 -960 960 960` viewBox and theme via `color`.

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
- [references/icons/lu.json](references/icons/lu.json) · [lu.md](references/icons/lu.md) — Lucide
- [references/icons/fa.json](references/icons/fa.json) · [fa.md](references/icons/fa.md) — Font Awesome Free
- [references/icons/fab.json](references/icons/fab.json) · [fab.md](references/icons/fab.md) — Font Awesome Free Brands
- [references/icons/far.json](references/icons/far.json) · [far.md](references/icons/far.md) — Font Awesome Free Regular
- [references/icons/ti.json](references/icons/ti.json) · [ti.md](references/icons/ti.md) — Typicons
- [references/icons/oc.json](references/icons/oc.json) · [oc.md](references/icons/oc.md) — Octicons
- [references/icons/dev.json](references/icons/dev.json) · [dev.md](references/icons/dev.md) — Devicons
- [references/icons/wi.json](references/icons/wi.json) · [wi.md](references/icons/wi.md) — Weather Icons
- [references/icons/ad.json](references/icons/ad.json) · [ad.md](references/icons/ad.md) — Ant Design Icons
- [references/icons/fc.json](references/icons/fc.json) · [fc.md](references/icons/fc.md) — Flat Color Icons
- [references/icons/gi.json](references/icons/gi.json) · [gi.md](references/icons/gi.md) — Game Icons
- [references/icons/gr.json](references/icons/gr.json) · [gr.md](references/icons/gr.md) — Grommet
- [references/icons/rx.json](references/icons/rx.json) · [rx.md](references/icons/rx.md) — Radix Icons
- [references/icons/tf.json](references/icons/tf.json) · [tf.md](references/icons/tf.md) — Themify
- [references/icons/vsc.json](references/icons/vsc.json) · [vsc.md](references/icons/vsc.md) — Codicons
- [references/icons/cg.json](references/icons/cg.json) · [cg.md](references/icons/cg.md) — css.gg
- [references/icons/sl.json](references/icons/sl.json) · [sl.md](references/icons/sl.md) — Simple Line Icons
- [references/icons/hi.json](references/icons/hi.json) · [hi.md](references/icons/hi.md) — Heroicons
- [references/icons/ri.json](references/icons/ri.json) · [ri.md](references/icons/ri.md) — Remix Icon
- [references/icons/si.json](references/icons/si.json) · [si.md](references/icons/si.md) — Simple Icons
- [references/icons/bs.json](references/icons/bs.json) · [bs.md](references/icons/bs.md) — Bootstrap Icons
- [references/icons/mdf.json](references/icons/mdf.json) · [mdf.md](references/icons/mdf.md) — Material Icons Filled
- [references/icons/mdr.json](references/icons/mdr.json) · [mdr.md](references/icons/mdr.md) — Material Icons Rounded
- [references/icons/mds.json](references/icons/mds.json) · [mds.md](references/icons/mds.md) — Material Icons Sharp
- [references/icons/mdt.json](references/icons/mdt.json) · [mdt.md](references/icons/mdt.md) — Material Icons Two Tone
- [references/icons/mso.json](references/icons/mso.json) · [mso.md](references/icons/mso.md) — Material Symbols Outlined
- [references/icons/msr.json](references/icons/msr.json) · [msr.md](references/icons/msr.md) — Material Symbols Rounded
- [references/icons/mss.json](references/icons/mss.json) · [mss.md](references/icons/mss.md) — Material Symbols Sharp

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
4. Respect licensing: Circum (`ci`) is MPL-2.0; Font Awesome Free (`fa`, `fab`, `far`) and Flat Color Icons (`fc`) are CC-BY-4.0; Game Icons (`gi`) is CC-BY-3.0; Typicons (`ti`) is CC-BY-SA-4.0; Weather Icons (`wi`) is OFL-1.1; Grommet (`gr`) and Material Icons (`md`, `mdf`, `mdr`, `mds`, `mdt`) and Material Symbols (`mso`, `msr`, `mss`) and Remix Icon (`ri`) are Apache-2.0; Simple Icons (`si`) is CC0-1.0 (public domain, but brand trademarks still apply); Feather/Ionicons/Octicons/Devicons/Ant Design (`ad`)/Bootstrap Icons (`bs`) are MIT; Lucide (`lu`) is ISC.
