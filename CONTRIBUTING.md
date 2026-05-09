# Contributing to mal-icon

Thanks for your interest in contributing!

## Prerequisites

- [Bun](https://bun.sh) >= 1.1

## Getting started

```bash
bun install
bun run typecheck
bun test
```

## Project structure

- `packages/core` — framework-agnostic types and theming logic. No framework deps.
- `packages/react` — React adapter (`createIcon`, `IconBase`, `IconContext`).
- `packages/cli` — the icon build pipeline (fetch → optimize → dedup → generate).

## Conventions

- TypeScript-first, ESM-first.
- No `dangerouslySetInnerHTML`; only sanitized SVG output.
- Per-icon files with `sideEffects: false` to guarantee tree-shaking.
- Deterministic output: the same input must always produce the same files.

## Commit style

- Small, focused commits.
- Imperative mood (e.g. "add IconBase prop merging").

## Before opening a PR

```bash
bun run typecheck
bun test
bun run lint
```
