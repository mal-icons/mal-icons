# mal-icons

[![CI](https://github.com/mal-icons/mal-icons/actions/workflows/ci.yml/badge.svg)](https://github.com/mal-icons/mal-icons/actions/workflows/ci.yml)
[![CodeQL](https://github.com/mal-icons/mal-icons/actions/workflows/codeql.yml/badge.svg)](https://github.com/mal-icons/mal-icons/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A high-performance, multi-framework icon SDK. Author your UI with a single,
consistent API across **React**, **React Native**, **Vue**, **Svelte**, **Preact**, **Solid**, **Angular**, **Astro**, and ship only the
icons you actually use.

AI coding agents can find the right icon and write the correct import for your framework via the included [**`mal-icons` agent skill**](./skills/mal-icons).

Icons are generated ahead of time into individual, tree-shakeable components —
there is no runtime tree-walking, no JSON parsing on render, and no
`dangerouslySetInnerHTML`.

> Built and tested end-to-end with **Bun** (runtime, package manager, bundler,
> and test runner).

## Highlights

- **Multi-framework** — first-class React, React Native, Vue 3, Svelte 5, Preact 10, SolidJS 1.9, Angular 22, and Astro adapters that share one data model and render identical SVG markup.
- **Compile-time generation** — each icon is its own module, so bundlers keep exactly what you import and nothing else.
- **Tiny by design** — a strict per-icon size budget (< 0.8 KB gzipped) is enforced in CI.
- **Flexible delivery** — direct imports, SVG sprites, CDN/lazy loading, and dynamic-by-name resolution.
- **Theming** — size, color, and class are resolved through a context provider with per-icon overrides.
- **Differentiators** — opt-in CSS animations, stroke weights, multi-tone
  colors, and React Server Component support.
- **First-class DX** — type-safe icon names, fuzzy and natural-language search,
  a vendoring CLI, a license report, and an ESLint plugin.
- **Accessible** — correct `role`/`aria-hidden` handling and optional titles.
- **Open source** — MIT license, with all source icons bundled and their licenses documented.
- **AI agent support** — a first-class [Agent Skill](https://agentskills.io) so AI coding assistants can find the right icon and write the correct import for your framework.

## Packages

Every package ships its own focused README — click a package name for
framework-specific installation, theming, and API docs.

| Package                                                | Description                                         |
| ------------------------------------------------------ | --------------------------------------------------- |
| [`@mal-icons/core`](./packages/core)                   | Framework-agnostic types and theming logic          |
| [`@mal-icons/react`](./packages/react)                 | React adapter and generated icons                   |
| [`@mal-icons/react-native`](./packages/react-native)   | React Native adapter and generated icons            |
| [`@mal-icons/vue`](./packages/vue)                     | Vue 3 adapter and generated icons                   |
| [`@mal-icons/svelte`](./packages/svelte)               | Svelte 5 adapter and generated icons                |
| [`@mal-icons/preact`](./packages/preact)               | Preact adapter and generated icons                  |
| [`@mal-icons/solid`](./packages/solid)                 | Solid adapter and generated icons                   |
| [`@mal-icons/angular`](./packages/angular)             | Angular standalone adapter and generated icons      |
| [`@mal-icons/astro`](./packages/astro)                 | Astro adapter and generated `.astro` components     |
| [`@mal-icons/web`](./packages/web)                     | Zero-build web/CDN renderer, data and `<mal-icons>` |
| [`@mal-icons/cli`](./packages/cli)                     | Build pipeline + vendoring/search/license CLI       |
| [`@mal-icons/eslint-plugin`](./packages/eslint-plugin) | Lint rules for correct, minimal icon usage          |

## Icons

The bundled icon sets, their upstream licenses, pinned versions, and counts:

| Icon Library                             | License                                                                           | Version | Count |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ------- | ----: |
| [Ant Design Icons](https://ant.design/components/icon) | [MIT license](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE) | 4.0.0   |   420 |
| [Circum Icons](https://circumicons.com/) | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE) | 2.0.2   |   288 |
| [Devicons](https://devicons.io/)         | [MIT license](https://github.com/vorillaz/devicons/blob/main/LICENSE)             | 2.0.1   |  1725 |
| [Feather](https://feathericons.com/)     | [MIT license](https://github.com/feathericons/feather/blob/main/LICENSE)          | 4.29.0  |   287 |
| [Flat Color Icons](https://icons8.github.io/flat-color-icons/) | [CC BY 4.0 license](https://github.com/icons8/flat-color-icons/blob/master/LICENSE.md) | 1.0.2   |   312 |
| [Font Awesome Free](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  1402 |
| [Font Awesome Free Brands](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  495 |
| [Font Awesome Free Regular](https://fontawesome.com/) | [CC BY 4.0 license](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt) | 6.7.2   |  163 |
| [Grommet](https://icons.grommet.io/) | [Apache 2.0 license](https://github.com/grommet/grommet-icons/blob/master/LICENSE) | 4.14.0  |   637 |
| [Ionicons](https://ionic.io/ionicons)    | [MIT license](https://github.com/ionic-team/ionicons/blob/main/LICENSE)           | 8.0.13  |  1357 |
| [Lucide](https://lucide.dev/icons/) | [ISC license](https://github.com/lucide-icons/lucide/blob/main/LICENSE) | 1.19.0  |  1727 |
| [Octicons](https://primer.style/octicons/) | [MIT license](https://github.com/primer/octicons/blob/main/LICENSE) | 19.28.1 |   733 |
| [Typicons](https://www.s-ings.com/typicons/) | [CC BY-SA 4.0 license](https://github.com/stephenhutchings/typicons.font/blob/master/LICENCE.md) | 2.1.2   |   336 |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | [SIL OFL 1.1 license](https://github.com/erikflowers/weather-icons/blob/master/README.md#licensing) | 2.0.12  |   219 |

Each set is exposed under its own subpath (`/ad`, `/ci`, `/dev`, `/fa`, `/fab`, `/far`, `/fc`, `/fi`, `/gr`, `/io`, `/lu`, `/ti`, `/wi`) and at the package root.

## Installation

Install the adapter for your framework:

```bash
bun add @mal-icons/react
# or
npm install @mal-icons/react
```

React Native also needs its peer dependency:

```bash
bun add @mal-icons/react-native react-native-svg
```

## Use with AI agents (Agent Skills)

This repo ships a first-class [**`mal-icons` agent skill**](./skills/mal-icons)
so AI coding agents can find the right icon, write the correct import for your
framework, and follow theming/SSR best practices — instead of guessing
component names. It follows the open [Agent Skills](https://agentskills.io)
standard (a `SKILL.md` plus bundled reference docs and a search script).

Install it into your agent with the [`skills` CLI](https://www.npmjs.com/package/skills)
(works with Claude Code, GitHub Copilot, Cursor, Codex, and 60+ others):

```bash
# Add the skill to the agents detected in your project
npx skills add mal-icons/mal-icons

# Preview what's in the repo without installing
npx skills add mal-icons/mal-icons --list

# Install only the icons skill, to a specific agent, globally
npx skills add mal-icons/mal-icons --skill mal-icons -a claude-code -g
```

Once installed, ask your agent naturally — "add a trash icon to this button" or
"which icon should I use for notifications?" — and it searches the bundled
catalog (Ant Design, Feather, Circum, Devicons, Flat Color Icons, Font Awesome, Grommet, Ionicons, Lucide, Octicons, Typicons, Weather Icons) and wires the icon into your code. You can
also run the search helper directly:

```bash
node skills/mal-icons/scripts/search.js "shopping cart" --set fi
```

See [`skills/mal-icons`](./skills/mal-icons) for the full skill, per-framework
setup guides, and the icon catalog.

## Quick start

### React

```tsx
import { FiActivity } from "@mal-icons/react/fi";

export function Status() {
  return <FiActivity size={24} color="currentColor" title="Status" />;
}
```

Provide app-wide defaults with the context provider:

```tsx
import { IconContext } from "@mal-icons/react";

<IconContext.Provider value={{ size: 20, color: "#3366ff" }}>
  <App />
</IconContext.Provider>;
```

### React Native

Backed by [`react-native-svg`](https://github.com/software-mansion/react-native-svg),
so the same icons render natively on iOS and Android:

```tsx
import { FiActivity } from "@mal-icons/react-native/fi";

export function Status() {
  return <FiActivity size={24} color="#3366ff" title="Status" />;
}
```

Theming flows through the same context API (sizes are plain numbers, since
there is no DOM/CSS):

```tsx
import { IconContext } from "@mal-icons/react-native";

<IconContext.Provider value={{ size: 20, color: "#3366ff" }}>
  <App />
</IconContext.Provider>;
```

### Vue

```vue
<script setup lang="ts">
import { FiActivity } from "@mal-icons/vue/fi";
</script>

<template>
  <FiActivity :size="24" title="Status" />
</template>
```

### Svelte

```svelte
<script lang="ts">
  import { FiActivity } from "@mal-icons/svelte/fi";
</script>

<FiActivity size={24} title="Status" />
```

### Preact

```tsx
import { FiActivity } from "@mal-icons/preact/fi";

<FiActivity size={24} title="Status" />;
```

### Solid

```tsx
import { FiActivity } from "@mal-icons/solid/fi";

<FiActivity size={24} title="Status" />;
```

### Angular

```ts
import { FiActivity } from "@mal-icons/angular/fi";

@Component({
  standalone: true,
  imports: [FiActivity],
  template: `<mal-fi-activity [size]="24" title="Status" />`,
})
export class StatusIcon {}
```

### Astro

```astro
---
import FiActivity from "@mal-icons/astro/fi/FiActivity.astro";
---

<FiActivity size={24} title="Status" />
```

> Astro components render at build time and have no runtime context, so
> theming is configured per-component via props rather than a shared provider.

### Web / CDN (no build)

```html
<script type="module">
  import { defineMalIcon, registerIcons } from "https://esm.sh/@mal-icons/web";
  import { fi } from "https://esm.sh/@mal-icons/web/fi";

  registerIcons(fi);
  defineMalIcon();
</script>

<mal-icons name="FiActivity" size="24" title="Status"></mal-icons>
```

Or render imperatively / lazily over a CDN:

```js
import { renderIcon, cdnLoader } from "@mal-icons/web";
import FiActivity from "@mal-icons/web/fi/FiActivity.json" with { type: "json" };

document.body.appendChild(
  renderIcon(FiActivity, { size: 24, title: "Status" }),
);

const load = cdnLoader("https://cdn.example.com/mal-icons/fi");
const data = await load("FiActivity");
```

## Theming and styling

Every icon accepts a consistent prop surface:

| Prop             | Description                                                                                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size`           | Width and height (number or CSS length)                                                                                                                                                               |
| `color`          | Overrides `currentColor`                                                                                                                                                                              |
| `weight`         | Stroke weight: `thin` \| `light` \| `regular` \| `bold`                                                                                                                                               |
| `animate`        | CSS animation: `spin` \| `pulse` \| `beat` \| `bounce` \| `ping` \| `shake` \| `wiggle` \| `float` \| `heartbeat` \| `flip` \| `rotate` \| `zoom` \| `fade` \| `slide` \| `glow` \| `swing` \| `tada` |
| `secondaryColor` | Multi-tone color, exposed as `--mal-icons-secondary`                                                                                                                                                  |
| `multicolor`     | Keep the icon's own colors (omits the `currentColor` `stroke`/`fill` defaults)                                                                                                                        |
| `title`          | Accessible label (renders `<title>` and `role="img"`)                                                                                                                                                 |
| `className`      | Additional class names                                                                                                                                                                                |
| `style`          | Inline styles                                                                                                                                                                                         |

Animations are pure CSS. Inject the keyframes once and they apply only to the
icons that opt in, with a built-in `prefers-reduced-motion` guard:

```tsx
import { ICON_ANIMATIONS_CSS } from "@mal-icons/react";

<style>{ICON_ANIMATIONS_CSS}</style>;
<FiLoader animate="spin" />;
```

## Advanced rendering (React)

```tsx
// SVG sprite
import { SpriteIcon } from "@mal-icons/react";
<SpriteIcon id="fi-activity" href="/sprite/fi.svg" />;

// Dynamic by name, with caching and preloading
import { Icon, cdnLoader, setDefaultIconLoader } from "@mal-icons/react";
setDefaultIconLoader(cdnLoader("https://cdn.example.com/icons"));
<Icon name="FiActivity" />;
```

### React Server Components

Use the hook-free server entry to render icons directly inside Server
Components:

```tsx
import { createServerIcon } from "@mal-icons/react/server";
```

## CLI

```bash
# Generate framework modules from the configured icon sets
mal-icons generate --set fi

# Vendor specific icons into your project
mal-icons add FiActivity FiBell --framework react --out src/icons

# Search the icon catalog (add --semantic for natural-language queries)
mal-icons search arrow
mal-icons search "trash" --semantic

# Turn your own SVG into a component
mal-icons import logo.svg --name BrandLogo --framework react-native

# Produce a license report for the bundled sets
mal-icons licenses --out LICENSES.md
```

## Repository layout

```
packages/
  core/          # framework-agnostic types + theming logic
  react/         # React adapter + generated icons
  react-native/  # React Native adapter (react-native-svg) + generated icons
  vue/           # Vue 3 adapter + generated icons
  svelte/        # Svelte 5 adapter + generated icons
  preact/        # Preact adapter + generated icons
  solid/         # Solid adapter + generated icons
  angular/       # Angular standalone adapter + generated icons
  astro/         # Astro adapter + generated .astro components
  web/           # zero-build web/CDN renderer + <mal-icons> element
  cli/           # build pipeline (fetch / optimize / generate)
  eslint-plugin/ # lint rules
icons-data/      # pinned source configs + licenses
scripts/         # build, size, and benchmark tooling
test/            # cross-framework parity tests
examples/        # runnable demo apps (one per supported framework + CDN sprite)
```

## Examples

The [`examples/`](./examples) folder contains professionally-designed demo apps
that render the same icon gallery in every supported framework:

| Example                                   | Stack                          |
| ----------------------------------------- | ------------------------------ |
| [`react`](./examples/react)               | Vite + React 19                |
| [`nextjs`](./examples/nextjs)             | Next.js App Router (RSC)       |
| [`vue`](./examples/vue)                   | Vite + Vue 3.5                 |
| [`nuxt`](./examples/nuxt)                 | Nuxt 3 (SSR)                   |
| [`svelte`](./examples/svelte)             | Vite + Svelte 5                |
| [`preact`](./examples/preact)             | Vite + Preact 10               |
| [`solid`](./examples/solid)               | Vite + SolidJS 1.9             |
| [`angular`](./examples/angular)           | Vite + Angular 22 (JIT)        |
| [`astro`](./examples/astro)               | Astro (static, zero-JS)        |
| [`react-native`](./examples/react-native) | Expo + react-native-svg        |
| [`web`](./examples/web)                   | Vanilla TS + Web Components    |
| [`cdn-sprite`](./examples/cdn-sprite)     | Plain HTML (no build, no deps) |

See [`examples/README.md`](./examples/README.md) for run instructions.

## Development

```bash
bun install        # install dependencies
bun run typecheck  # type-check all packages
bun test           # run the test suite
bun run build      # build ESM + CJS bundles and type declarations
bun run lint       # lint with Biome
bun run size       # enforce the per-icon size budget
bun run generate   # regenerate icon modules from sources
```

## Community

- Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.
- Use [SUPPORT.md](./SUPPORT.md) for questions, bugs, and feature requests.
- Report vulnerabilities privately using [SECURITY.md](./SECURITY.md).
- Releases are documented in [docs/RELEASE.md](./docs/RELEASE.md).
- Changes are tracked in [CHANGELOG.md](./CHANGELOG.md).

## License

MIT. Source icon sets may have their own licenses; use the CLI license report
when shipping bundled icon sets.
