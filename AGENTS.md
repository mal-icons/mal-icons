# AGENTS.md — mal-icons

Guidance for AI coding agents (and humans) working in this repository. Read this
before making changes. It describes how the code is structured, the conventions
it follows, and how to extend it safely.

> **One-line summary:** mal-icons is a high-performance, multi-framework icon SDK.
> Icons are generated **ahead of time** into individual, tree-shakeable component
> modules — no runtime tree-walking, no JSON parsing on render, no
> `dangerouslySetInnerHTML`.

---

## 1. Tech stack & toolchain

- **Runtime / package manager / bundler / test runner:** [Bun](https://bun.sh)
  `1.3.14` (pinned via `packageManager`). Everything (install, build, bundle,
  test) runs through Bun. Node `>=20` is supported as a **consumer** runtime
  (CI smoke-imports the built output under Node 20/22/24).
- **Language:** TypeScript, **strict**, ESM-first. `moduleResolution: "bundler"`,
  `verbatimModuleSyntax`, `allowImportingTsExtensions` +
  `rewriteRelativeImportExtensions` (so source uses explicit `.ts`/`.tsx`
  import extensions and still emits valid `.d.ts`).
- **Lint / format:** [Biome](https://biomejs.dev) `2.4.x` — double quotes, always
  semicolons, 2-space indent, 100-col line width.
- **Builds:** custom `scripts/build.ts` (Bun.build for JS, split ESM+CJS) +
  `tsc --build` (project references, declaration-only emit).

---

## 2. Monorepo layout

Bun workspaces: `packages/*` and `examples/*`.

| Path                           | What it is                                                                                                                                                                                                           |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/core`                | Framework-agnostic types + theming logic. **Zero framework deps.** The contract every adapter shares (`IconData`, `NodeTuple`, `resolveIconAttrs`, `WEIGHT_STROKE_WIDTH`, `ICON_ANIMATIONS_CSS`, `toKebabIconData`). |
| `packages/react`               | React adapter: `createIcon`, `IconBase`, `IconContext`, `SpriteIcon`, dynamic-by-name `Icon`, `/server` (RSC) entry.                                                                                                 |
| `packages/react-native`        | React Native adapter over `react-native-svg`.                                                                                                                                                                        |
| `packages/vue`                 | Vue 3 adapter (provide/inject context).                                                                                                                                                                              |
| `packages/svelte`              | Svelte 5 adapter (runes, `IconBase.svelte`). Ships **source**.                                                                                                                                                       |
| `packages/preact`              | Preact adapter (mirrors react).                                                                                                                                                                                      |
| `packages/solid`               | SolidJS adapter.                                                                                                                                                                                                     |
| `packages/angular`             | Angular standalone components. Ships **source**.                                                                                                                                                                     |
| `packages/astro`               | Astro `.astro` components, zero-runtime, props-only. Ships **source**.                                                                                                                                               |
| `packages/web`                 | Vanilla TS / CDN renderer + `<mal-icons>` custom element. Per-icon data as `.json`.                                                                                                                                  |
| `packages/cli`                 | The build pipeline (fetch → optimize → dedup → generate) + `add`/`search`/`licenses`/`import` commands. **Private**, never published.                                                                                |
| `packages/eslint-plugin`       | Lint rules: `prefer-named-import`, `no-unused-icons`.                                                                                                                                                                |
| `icons-data/sources.config.ts` | The **icon set registry** — single source of truth for which sets exist.                                                                                                                                             |
| `scripts/`                     | `build.ts`, `size-check.ts`, `bench.ts`, `set-version.ts`, `bun-svelte.ts`.                                                                                                                                          |
| `skills/mal-icons`             | Agent **skill** package: `SKILL.md`, per-set reference packs (`references/icons/<id>.json` + `.md`), per-framework setup guides, and `scripts/build-packs.mjs` + `search.js`. Ships the icon catalog to AI agents.   |
| `test/parity.test.ts`          | Cross-framework SSR parity (React + Vue + Svelte).                                                                                                                                                                   |
| `examples/`                    | Runnable demo apps, one per framework.                                                                                                                                                                               |

**Generated icons** live in `packages/<fw>/src/icons/<setId>/`:
react `.tsx`, vue/preact/solid/angular `.ts`, react-native `.tsx`,
svelte `.svelte`, astro `.astro`, web `.json`. Each set folder has a barrel
`index.ts`, a typed `names.ts`, and (where applicable) a `sprite.svg`.
A shared `manifest.json` and `search-index.json` sit at the icons root.

---

## 3. Key commands

```bash
bun install            # install
bun run typecheck      # tsc --build --verbose (all packages)
bun test               # 138 unit tests (preloads happy-dom + svelte compiler)
bun run lint           # biome check .
bun run lint:fix       # biome check --fix .  (run after generating files)
bun run build          # scripts/build.ts + tsc --build --force
bun run size           # per-icon gzip budget (react < 0.8 KB)
bun run bench          # micro-benchmarks
bun run generate --set <id>   # (re)generate one icon set
```

Generate a set (needs network to fetch the pinned archive):

```bash
bun run packages/cli/src/index.ts generate --set fi          # one set
bun run packages/cli/src/index.ts generate --set fi --no-fetch  # reuse .svg-cache
bun run packages/cli/src/index.ts generate --set fi --limit 20  # quick partial run
```

**Local verification pass (do this before finishing a task):**

```bash
bun run lint && bun run typecheck && bun test
# plus, for package/render/generator/bundle changes:
bun run size && bun run build
```

---

## 4. Architecture & code conventions

### The data model (core)

The pipeline produces, and adapters consume, one intermediate model:

- `IconNode` `{ tag, attr, child }` — parser output.
- `NodeTuple` `[tag, attr]` — compact runtime form. Children are built **once at
  module load**, never per render.
- `IconData` `{ viewBox, nodes, defaultAttr? }` — serializable payload for
  lazy/CDN/dynamic loaders.

### `createIcon` factory (per adapter)

Every framework exposes `createIcon(viewBox, nodes, defaultAttr?)` that returns a
memoized component. Generated per-icon files are thin wrappers around it:

```ts
const FiActivity = createIcon("0 0 24 24", [["path", { d: "…" }]]);
export default FiActivity; // DEFAULT export only (per-icon files)
```

### Theming / override priority (SRS rule, in `resolveIconAttrs`)

```
props.color > context.color
props.size  > context.size > "1em"
className   = context.className + " " + props.className
```

Root `<svg>` defaults to `stroke="currentColor"` **and** `fill="currentColor"`,
so both stroke- and fill-style sets theme via the `color` prop.

### Import styles — EXACTLY 3 supported

1. Per-icon **default**: `import FiSearch from "@mal-icons/react/fi/FiSearch"`
   (per-icon files have **no named export** — that's a TS error by design).
2. Set barrel **named**: `import { FiSearch } from "@mal-icons/react/fi"`.
3. Package-root **named**: `import { FiSearch } from "@mal-icons/react"`.

### Hard rules

- **No `dangerouslySetInnerHTML` / `innerHTML`.** SVG is always built from the
  node model via `createElement`/`createElementNS`.
- **Deterministic output.** Same input ⇒ byte-identical generated files. CI
  enforces this (`git diff --exit-code` after regenerate).
- **`sideEffects: false`** + per-icon modules ⇒ tree-shaking.
- Keep `core` framework-free.
- Comments explain **why**, not what. Match the existing JSDoc style.

### TypeScript / project references

- Cross-package types resolve via **project references** (not `paths`).
- Every project sets `tsBuildInfoFile: "./dist/.tsbuildinfo"` so `rm -rf dist`
  fully cleans incremental state.
- `types: ["bun"]` everywhere.
- Package `exports` use a `bun` condition pointing at `./src/*` so dev/test
  resolve **source** (no build needed); `import`→dist ESM, `require`→dist CJS,
  `types`→dist `.d.ts`.

---

## 5. The icon generation pipeline (`packages/cli/src`)

```
sources.config.ts → fetch.ts → svg.ts (parse) → optimize.ts → dedup.ts → generate.ts
```

- **`fetch.ts`** — downloads the pinned `tar.gz` from GitHub, extracts the set's
  `iconDir`, caches `.svg` into `.svg-cache/<id>/`. `normalizeName()` slugifies
  filenames to lowercase kebab (handles `_`, `&`, etc.) so component names stay
  valid identifiers.
- **`svg.ts`** — minimal dependency-free SVG parser (single `<svg>` root, flat
  shape children).
- **`optimize.ts`** — deterministic passes: round coords to 2 decimals, collapse
  whitespace, drop `class`/`id`/`xmlns`/`style`, **expand inline `style`** into
  discrete presentation attrs, fold concrete colors to `currentColor`, drop empty
  `<g>` wrappers, lift root attrs into `defaultAttr` (stroke sets get
  `fill:none` + `strokeWidth`).
- **`naming.ts`** — `toComponentName(prefix, raw)` → PascalCase `FiArrowUp`.
- **`generate.ts`** — emits per-framework modules + barrels + `names.ts` +
  `sprite.svg`, and **merges additively** into `manifest.json` /
  `search-index.json` (filters by set id, so other sets are untouched).

### Set styles

- `style: "stroke"` (e.g. Feather) → `fill="none"` + baked `strokeWidth`.
- `style: "fill"` (e.g. Circum, Ionicons) → paths theme via the root
  `fill="currentColor"`. Mixed sets (Ionicons outline variants carry stroke
  geometry in an inline `style`) are handled by `expandInlineStyle()`.

---

## 6. Recipe: add a new icon set

This is the most common extension. Follow the existing `ci` (Circum) / `io`
(Ionicons) sets as templates.

1. **Register** in `icons-data/sources.config.ts`: add an `IconSource` with
   `id`, `prefix`, `name`, `license` (SPDX), `repo` (`owner/name`), `ref`
   (pinned **tag**), `iconDir` (path to `.svg` inside the archive), and `style`.
2. **Inspect a few SVGs first** (`curl` a couple of raw files) to confirm
   viewBox, stroke vs fill, and whether geometry hides in inline `style`. Adjust
   `optimize.ts` only if a genuinely new shape appears — keep changes idempotent
   for existing sets.
3. **Generate:** `bun run packages/cli/src/index.ts generate --set <id>`.
4. **Wire root re-exports** in the 7 component packages' `src/index.ts`:
   `export * from "./icons/<id>/index.ts";`.
5. **Add `exports`** maps in **all 9** icon-shipping `package.json` files:
   `./<id>` + `./<id>/*` (web uses `./<id>/*.json`; astro uses `./<id>/*`).
   Add react `./sprite/<id>.svg`.
6. **`scripts/build.ts`** — add `<id>` to the sprite-copy loop.
7. **Docs** — add a row to every `## Icons` table (root + cli + 9 framework
   READMEs) and a `/<id>` row to each `## Subpath exports` table.
8. **Update the agent skill** (`skills/mal-icons`) — the skill ships the icon
   catalog to AI agents and **must** include every set:
   1. Add a `SET_META` entry in `skills/mal-icons/scripts/build-packs.mjs`
      (`id`, `name`, `prefix`, `version`, `license`, `repo`, `style`, `viewBox`,
      `blurb`). Add any new `SYNONYMS` (keep in lock-step with both
      `packages/cli/src/search.ts` **and** `skills/mal-icons/scripts/search.js`).
   2. Add `<id>` to `const SETS = [...]` and the `--set` help strings in
      `skills/mal-icons/scripts/search.js`.
   3. **Regenerate the packs:** `cd skills/mal-icons && node scripts/build-packs.mjs`
      → emits `references/icons/<id>.json` + `<id>.md` (committed artifacts).
      Reads the library's `packages/react/src/icons/search-index.json`, so run
      this **after** `generate`.
   4. Update the set list + total icon count in `skills/mal-icons/SKILL.md`
      (frontmatter `description`, the `## Icon sets` table, the
      `## Finding an icon` links), `skills/mal-icons/README.md`, and the
      `short_description` in **every** `skills/mal-icons/agents/*.yaml`.
   5. Sanity-check: `node scripts/search.js <concept> --set <id>`.
9. **Verify:** `bun run lint:fix && bun run typecheck && bun test`, then SSR
   smoke-test one icon (stroke and fill variants).
10. **Commit** once green. Stage the source changes, the generated icons, and
    the regenerated skill packs together so the set lands atomically:
    ```bash
    git add packages icons-data scripts skills README.md
    git commit -m "feat(icons): add <Name> (<id>) icon set"
    ```
    Use a small, focused, imperative-mood message. Generated files **are**
    committed (they are expected output) — do **not** `.gitignore` them. No
    co-author/`Co-authored-by` trailers.

> Generated files **are committed** (they are expected output). Always review
> `git diff -- packages skills` after generating.

---

## 7. Build & packaging

- `scripts/build.ts` builds 8 packages with Bun (core, react, vue, preact, solid,
  web, react-native, eslint-plugin). `angular`, `astro`, `svelte` ship **source**
  (no build step).
- Split **ESM + CJS**; per-icon files are ESM-only.
- React injects `"use client"` via a build **banner** at true line 1 of every
  client chunk (Bun hoists imports above source-level directives, so the source
  directive alone is not enough). `server.tsx` stays banner-free (hook-free RSC).
- Static assets (`sprite.svg`, `manifest.json`) are copied into `dist`.

---

## 8. Testing

- `bun test` runs `*.test.ts(x)` across packages + root. `bunfig.toml` preloads
  `test-setup.ts` (happy-dom global registrator) and `scripts/bun-svelte.ts`
  (compiles `.svelte` for tests).
- React tests use `renderToStaticMarkup`; Vue uses `@vue/server-renderer`; Svelte
  uses `svelte/server`.
- `test/parity.test.ts` asserts React/Vue/Svelte emit identical SSR markup.
- New behavior ⇒ add/adjust tests. Snapshot changes must be reviewed, not blindly
  refreshed.

---

## 9. CI gates (`.github/workflows/ci.yml`)

Every PR must pass: **lint**, **typecheck + test**, **size budget**, **generator
determinism** (regenerate `fi` ⇒ no git diff), **security audit**
(`bun audit --audit-level=high`), **dependency review**, and **Node-compat**
smoke-imports (built dist imports under Node 20/22/24). `react-native` dist is
**excluded** from Node smoke tests (Metro-only Flow syntax).

---

## 10. Releasing (npm)

- Published packages have **no runtime deps** except `@mal-icons/core`
  (`workspace:*`).
- **Use `bun publish`, not `npm publish`** — npm does not resolve `workspace:*`.
  After any version bump, run `bun install` so `bun.lock` pins the new core
  version, then verify with `bun pm pack` before publishing. Publish **core
  first**.
- `scripts/set-version.ts` surgically bumps the `version` field in each
  `packages/*/package.json` (skips private `cli`).
- `.github/workflows/release.yml` automates this on a `v*` tag push (needs the
  `NPM_TOKEN` secret). `@mal-icons/cli` is `private` and never published.

---

## 11. Gotchas (learned the hard way)

- **Bun barrel facade bug:** a pure re-export `index.ts` over a diamond import
  graph + `splitting:true` can drop the chunk that defines symbols. Fix: give each
  barrel ≥1 real local binding (rebind core values as `const X = coreX`).
- **`tsBuildInfoFile` must point inside `dist`**, else `rm -rf dist` leaves stale
  incremental state and `tsc` skips re-emitting deleted `.d.ts`.
- **Biome excludes** `**/*.svelte`, `**/*.astro`, `**/*.vue`, and `**/icons`
  (generated). READMEs and generated icon files are **not** Biome-formatted —
  match formatting by hand. Run `bun run lint:fix` after `generate` to format the
  few non-excluded generated files (e.g. data JSON).
- **CLI ↔ icons-data:** import `sources.config` **extensionless** from the CLI to
  avoid a TS rewrite error.
- Feather's repo default branch is `main`; pin to a **tag**, never a branch.
- A trailing-slash subpath import (`@mal-icons/react/fi/`) matches no export —
  drop the slash.

---

## 12. What to work on next

Suggested follow-ups, roughly in priority order:

1. **Run `bun run size` for fill-heavy sets.** Ionicons (and other large fill
   sets) have long path data; confirm the per-icon gzip budget still holds before
   any release, and relax/segment the budget if a set legitimately needs it.
2. **Broaden generator determinism in CI.** The determinism job only regenerates
   `fi`. Extend it (or matrix it) to cover `ci` and `io` so all sets stay
   reproducible. Note: this requires network access in CI to fetch archives.
3. **Extend parity coverage.** `test/parity.test.ts` only checks React/Vue/Svelte.
   Add Preact/Solid/Angular/Astro/RN/Web to catch cross-adapter drift.
4. **Build-time on-demand resolver (`@mal-icons/unplugin`).** A data-driven plugin
   that generates only imported icons at build time — the path to scaling to tens
   of thousands of icons without writing per-icon files for every framework.
   Foundation (a de-duplicated `@mal-icons/data` layer) is the prerequisite.
5. **More icon sets.** Adding sets is now a well-trodden recipe (§6); good
   candidates are popular MIT/Apache/MPL sets. Always pin a tag and record the
   license.
6. **Docs site + VS Code extension.** The data layer (search index / manifest)
   already exists; the UI apps are deferred.

When you finish a unit of work, leave the repo green: `lint`, `typecheck`,
`test` passing, generated files committed, and docs updated for any public API
or icon-set change.
