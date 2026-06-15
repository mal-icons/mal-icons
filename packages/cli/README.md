# mal-icons/cli


The Bun-powered build pipeline and developer-tooling CLI for
[**mal-icons**](https://github.com/mal-icons/mal-icons). It fetches upstream
icon sources, optimizes and deduplicates SVGs, generates per-framework icon
modules, vendors individual icons into your project, searches the catalog, and
produces license reports.

> Built and run with [Bun](https://bun.sh). The `mal-icons` bin executes
> TypeScript directly.

> **Note:** This package is internal to the mal-icons monorepo and is **not
> published to npm**. It is run from within the repository using Bun.

## Usage

Clone the [mal-icons](https://github.com/mal-icons/mal-icons) repository and run
the CLI directly from the workspace with Bun:

```bash
bun install
bun run packages/cli/src/index.ts <command>
```

## Commands

```
mal-icons generate --set <id> [--no-fetch] [--limit <n>]
mal-icons add <Name...> [--set <id>] [--framework <name>] [--out <dir>]
mal-icons licenses [--out <file>]
mal-icons search <query...> [--semantic]
mal-icons import <file.svg> --name <Name> [--framework <name>] [--out <dir>]
```

`--framework` accepts: `react` · `react-native` · `vue` · `svelte` · `preact` · `solid`
(default `react`).

### Generate framework modules

Fetch a set and emit per-framework, tree-shakeable icon modules:

```bash
mal-icons generate --set fi          # download + generate the Feather set
mal-icons generate --set ci          # download + generate the Circum set
mal-icons generate --set io          # download + generate the Ionicons set
mal-icons generate --set fi --no-fetch  # reuse the local SVG cache
mal-icons generate --set fi --limit 20  # quick partial run
```

### Vendor specific icons

Copy only the icons you need into your own project:

```bash
mal-icons add FiActivity FiBell --framework react --out src/icons
```

### Search the catalog

```bash
mal-icons search arrow            # fuzzy ranking
mal-icons search "trash" --semantic   # natural-language / synonym-aware
```

### Import your own SVG

Turn any SVG into a framework component:

```bash
mal-icons import logo.svg --name BrandLogo --framework react-native
```

### License report

Produce a license report for the bundled sets before shipping:

```bash
mal-icons licenses --out LICENSES.md
```

## Icons

The icon sets the pipeline knows how to fetch and generate, with their upstream
licenses, pinned versions, and counts:

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
| [Heroicons](https://heroicons.com/) | [MIT license](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE) | 2.2.0 | 324 |
| [Ionicons](https://ionic.io/ionicons)    | [MIT license](https://github.com/ionic-team/ionicons/blob/main/LICENSE)           | 8.0.13  |  1357 |
| [Lucide](https://lucide.dev/icons/) | [ISC license](https://github.com/lucide-icons/lucide/blob/main/LICENSE) | 1.19.0  |  1727 |
| [Octicons](https://primer.style/octicons/) | [MIT license](https://github.com/primer/octicons/blob/main/LICENSE) | 19.28.1 |   733 |
| [Simple Line Icons](https://simplelineicons.github.io/) | [MIT license](https://github.com/thesabbir/simple-line-icons/blob/master/LICENSE.md) | 2.5.5 | 189 |
| [Typicons](https://www.s-ings.com/typicons/) | [CC BY-SA 4.0 license](https://github.com/stephenhutchings/typicons.font/blob/master/LICENCE.md) | 2.1.2   |   336 |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | [SIL OFL 1.1 license](https://github.com/erikflowers/weather-icons/blob/master/README.md#licensing) | 2.0.12  |   219 |

## Options

| Option               | Description                                               |
| -------------------- | --------------------------------------------------------- |
| `--set <id>`         | Icon set (e.g. `fi`). Omit on `generate` to do all sets.  |
| `--no-fetch`         | Reuse the local SVG cache instead of downloading.         |
| `--limit <n>`        | Only process the first `<n>` icons (quick checks).        |
| `--framework <name>` | Target framework for `add` / `import` (default `react`).  |
| `--name <Name>`      | Component name for `import`.                              |
| `--out <path>`       | Output directory (`add` / `import`) or file (`licenses`). |

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/cli`](https://github.com/mal-icons/mal-icons/tree/main/packages/cli).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs.
Source icon sets may carry their own licenses — use `mal-icons licenses` when
shipping bundled sets.
