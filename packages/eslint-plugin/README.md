# @mal-icons/eslint-plugin

[![npm](https://img.shields.io/npm/v/@mal-icons/eslint-plugin.svg)](https://www.npmjs.com/package/@mal-icons/eslint-plugin)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mal-icons/mal-icons/blob/main/LICENSE)

ESLint rules for [**mal-icons**](https://github.com/mal-icons/mal-icons) that
keep icon usage correct, minimal, and tree-shakeable.

## Rules

| Rule                             | Description                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------- |
| `@mal-icons/prefer-named-import` | Enforce named subpath imports (`@mal-icons/react/fi`) so bundlers tree-shake. |
| `@mal-icons/no-unused-icons`     | Flag imported icons that are never used.                                      |

## Installation

```bash
bun add -d @mal-icons/eslint-plugin
# or
npm install --save-dev @mal-icons/eslint-plugin
```

> Requires ESLint 8 or newer (peer dependency).

## Use with AI agents

The [`mal-icons` agent skill](../../skills/mal-icons) teaches AI coding agents
to use these lint rules and write tree-shakeable icon imports. Install it with
the [`skills` CLI](https://www.npmjs.com/package/skills):

```bash
npx skills add mal-icons/mal-icons
```

See the
[ESLint plugin setup guide](../../skills/mal-icons/references/setup/eslint-plugin.md).

## Usage

### Flat config (ESLint 9+)

The plugin ships a `recommended` flat config that enables both rules as errors:

```js
// eslint.config.js
import malIcons from "@mal-icons/eslint-plugin";

export default [malIcons.configs.recommended];
```

Or wire the rules manually:

```js
import malIcons from "@mal-icons/eslint-plugin";

export default [
  {
    plugins: { "@mal-icons": malIcons },
    rules: {
      "@mal-icons/prefer-named-import": "error",
      "@mal-icons/no-unused-icons": "error",
    },
  },
];
```

## Repository

<https://github.com/mal-icons/mal-icons> · package directory
[`packages/eslint-plugin`](https://github.com/mal-icons/mal-icons/tree/main/packages/eslint-plugin).

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs
