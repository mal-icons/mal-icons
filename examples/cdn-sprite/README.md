# mal-icons · SVG sprite example (framework-free)

A zero-dependency, no-bundler demo that renders icons from a single generated
**SVG sprite** using `<use href="#fi-…">`. This is the "and other" delivery
mode — perfect for static sites where you don't want a framework runtime.

## What it demonstrates

- **One cached sprite** of `<symbol>`s (`fi.svg`) referenced by id.
- **`currentColor` theming** — stroke color follows CSS `color`.
- Pure HTML/CSS/JS — no build step, no dependencies.

## Run

The sprite (`packages/react/src/icons/fi/sprite.svg`) is committed in the repo,
so no library build is required. From this folder:

```bash
# copies the sprite to ./fi.svg and serves over HTTP
npm run dev
```

Then open the printed URL (e.g. http://localhost:3000).

> Serve over HTTP rather than opening `index.html` from disk — browsers block
> `fetch()` on `file://`, which the demo uses to inline the sprite.

To regenerate the sprite from upstream sources, run `bun run generate` at the
repository root.
