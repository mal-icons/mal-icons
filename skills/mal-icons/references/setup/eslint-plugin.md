# Setup — ESLint plugin (`@mal-icons/eslint-plugin`)

ESLint rules that keep `@mal-icons` usage correct, minimal, and tree-shakeable.

## Rules

| Rule                             | Description                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------- |
| `@mal-icons/prefer-named-import` | Enforce named subpath imports (`@mal-icons/react/fi`) so bundlers tree-shake. |
| `@mal-icons/no-unused-icons`     | Flag imported icons that are never used.                                      |

## Install

```bash
bun add -d @mal-icons/eslint-plugin
# or
npm install --save-dev @mal-icons/eslint-plugin
```

> Peer dependency: `eslint >=8`.

## Flat config (ESLint 9+)

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

## Why

- `prefer-named-import` steers imports toward set subpaths so unused icons are
  dropped by tree-shaking.
- `no-unused-icons` removes dead icon imports, keeping bundles lean.

## Pitfalls

- Use a **flat config** (`eslint.config.js`) on ESLint 9+. For legacy
  `.eslintrc`, register the plugin and rules under the `@mal-icons` namespace.
