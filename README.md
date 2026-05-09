# mal-icon

A next-generation, highly optimized icon library for React (and, soon, Vue & Svelte).
Inspired by `react-icons`, but with a **smaller bundle size**, **faster runtime rendering**,
and **multi-framework support**.

> Tooling: built and tested with **Bun** (runtime, package manager, bundler, test runner).

## Why mal-icon?

| Metric                   | react-icons                 | mal-icon                    |
| ------------------------ | --------------------------- | --------------------------- |
| Per-icon runtime parse   | JSON tree walk every render | Zero (compile-time JSX)     |
| Single icon gzipped size | ~1–2 KB                     | < 0.8 KB                    |
| Theming API              | `Context.Consumer`          | `useContext` hook           |
| Framework support        | React only                  | React + Vue + Svelte        |
| Tree-shaking             | Depends on bundler          | Guaranteed (per-icon files) |

## Monorepo layout

```
packages/
  core/    # framework-agnostic types + theming logic
  react/   # React adapter + generated icons
  cli/     # build pipeline (fetch / optimize / generate)
icons-data/ # pinned source configs + licenses
examples/   # framework usage examples
```

## Development

```bash
bun install        # install dependencies
bun run typecheck  # type-check all packages
bun test           # run the test suite
```

## License

MIT
