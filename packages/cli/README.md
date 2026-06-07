# @mal-icons/cli

[![npm](https://img.shields.io/npm/v/@mal-icons/cli.svg)](https://www.npmjs.com/package/@mal-icons/cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

The Bun-powered build pipeline and developer-tooling CLI for
[**mal-icons**](https://github.com/mal-icons/mal-icons). It fetches upstream
icon sources, optimizes and deduplicates SVGs, generates per-framework icon
modules, vendors individual icons into your project, searches the catalog, and
produces license reports.

> Built and run with [Bun](https://bun.sh). The `mal-icons` bin executes
> TypeScript directly.

## Installation

```bash
bun add -d @mal-icons/cli
# or run ad hoc
bunx @mal-icons/cli <command>
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
