# Contributing to mal-icons

Thanks for your interest in contributing!

Please also read the [Code of Conduct](./CODE_OF_CONDUCT.md). By participating
in this project, you agree to keep the community respectful and productive.

## Prerequisites

- [Bun](https://bun.sh) >= 1.1
- Node.js >= 20

## Getting started

```bash
bun install
bun run typecheck
bun test
```

For a full local verification pass, run:

```bash
bun run lint
bun run typecheck
bun test
bun run size
bun run build
```

## Project structure

- `packages/core` — framework-agnostic types and theming logic. No framework deps.
- `packages/react` — React adapter (`createIcon`, `IconBase`, `IconContext`).
- `packages/cli` — the icon build pipeline (fetch → optimize → dedup → generate).
- `icons-data` — pinned source configuration and license metadata.
- `examples` — runnable demos for supported frameworks.

## Conventions

- TypeScript-first, ESM-first.
- No `dangerouslySetInnerHTML`; only sanitized SVG output.
- Per-icon files with `sideEffects: false` to guarantee tree-shaking.
- Deterministic output: the same input must always produce the same files.

## Issues

- Search existing issues before opening a new one.
- Use the issue templates and include the affected package or framework.
- For bugs, include a minimal reproduction and runtime versions.
- Do not report security vulnerabilities in public issues; follow
  [SECURITY.md](./SECURITY.md).

## Pull requests

- Keep PRs focused and explain the user-facing behavior change.
- Add or update tests for behavior changes.
- Update README, examples, or package docs when public APIs change.
- Regenerate icons only when source data or generator behavior changes.
- Commit generated files when they are part of the expected output.

## Generated icons

Icon output is generated and should remain deterministic. After changing
generator code or source configuration, run:

```bash
bun run generate
git diff -- packages
```

Review the diff carefully before opening a PR.

## Commit style

- Small, focused commits.
- Imperative mood (e.g. "add IconBase prop merging").

## Before opening a PR

```bash
bun run typecheck
bun test
bun run lint
```

Run `bun run size` and `bun run build` for package, rendering, generator, or
bundle-size changes.
