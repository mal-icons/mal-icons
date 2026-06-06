# mal-icons · SVG sprite example (framework-free)

> **Stack:** Plain HTML / CSS / JS · no build, no dependencies · [`@mal-icons/web`](../../packages/web)

A zero-dependency, no-bundler demo that renders icons from a single generated
**SVG sprite** using `<use href="#fi-…">`. This is the "static site" delivery
mode — perfect when you don't want a framework runtime at all.

## What it demonstrates

- **One cached sprite** of `<symbol>`s (`fi.svg`) referenced by id.
- **`currentColor` theming** — stroke color follows CSS `color`.
- Pure HTML/CSS/JS — no build step, no dependencies.

## Prerequisites

The sprite (`packages/react/src/icons/fi/sprite.svg`) is committed to the repo,
so no library build is required. You only need Node (for the `serve` helper) or
any static file server.

## Run

From this folder:

```bash
npm run dev   # copies the sprite to ./fi.svg and serves over HTTP
```

Then open the printed URL (e.g. <http://localhost:3000>).

> **Serve over HTTP** rather than opening `index.html` from disk — browsers
> block `fetch()` on `file://`, which this demo uses to inline the sprite.

### Scripts

| Script                | Description                                            |
| --------------------- | ------------------------------------------------------ |
| `npm run copy-sprite` | Copy the generated sprite into this folder as `fi.svg` |
| `npm run dev`         | Copy the sprite, then serve the folder over HTTP       |

## Project structure

```
examples/cdn-sprite/
├─ index.html   # inlines fi.svg, renders <svg><use href="#fi-..."></svg>
├─ app.js       # gallery + theming controls
└─ styles.css
```

## How it works

```html
<svg class="icon" style="color:#3366ff">
  <use href="#fi-activity"></use>
</svg>
```

The sprite is fetched once and inlined into the document; each icon references a
`<symbol>` by id, so the browser caches a single asset for the whole set.

## Regenerating the sprite

To rebuild the sprite from upstream sources, run `bun run generate` at the
repository root.

## Learn more

- Web renderer + `<mal-icons>` element → [`@mal-icons/web`](../../packages/web)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
