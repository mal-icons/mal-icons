# Release Guide

This guide is for maintainers publishing mal-icons packages.

## Versioning

Use Semantic Versioning for every public package:

- Patch: bug fixes, docs, internal build fixes.
- Minor: new icons, new framework APIs, backwards-compatible features.
- Major: breaking package exports, prop contracts, or runtime requirements.

Keep package versions aligned unless there is a strong reason to release one
package independently.

## Preflight

Start from a clean working tree on `main`.

```bash
bun install --frozen-lockfile
bun run lint
bun run typecheck
bun test
bun run size
bun run build
```

Verify package contents before publishing:

```bash
for dir in packages/core packages/react packages/vue packages/svelte \
  packages/preact packages/solid packages/react-native packages/web \
  packages/angular packages/astro packages/eslint-plugin; do
  (cd "$dir" && npm pack --dry-run)
done
```

## Publishing

The GitHub release workflow publishes with npm trusted publishing from GitHub
Actions, so it does not rely on an `NPM_TOKEN` secret.

Publish `@mal-icons/core` before framework adapters, then publish the CLI and
tooling packages when their package layout is ready for standalone use.

Before publishing manually, confirm that any `workspace:*` dependency ranges are
resolved to the version being released by your publish tooling.

```bash
cd packages/core
npm publish --provenance --access public
```

Repeat for each public package in dependency order.

## After release

- Create a GitHub release with the version, highlights, and migration notes.
- Update `CHANGELOG.md`.
- Verify the npm package pages, install commands, and README examples.
