# Setup — Web / vanilla (`@mal-icons/web`)

Zero-build web renderer. Use icons in plain HTML via a `<mal-icons>` custom
element, render imperatively, or lazy-load from a CDN — no framework, no bundler
required. Every shape is built with `document.createElementNS`; **never**
`innerHTML`, so CDN-loaded data is safe.

## Install

```bash
bun add @mal-icons/web
# or
npm install @mal-icons/web
```

No peer dependencies. You can also use it straight from a CDN.

## Quick start — custom element (no build)

```html
<script type="module">
  import { defineMalIcon, registerIcons } from "https://esm.sh/@mal-icons/web";
  import { fi } from "https://esm.sh/@mal-icons/web/fi";

  registerIcons(fi);
  defineMalIcon();
</script>

<mal-icons name="FiActivity" size="24" title="Status"></mal-icons>
```

The element observes its attributes — change `size`, `color`, `weight`, or
`animate` and it re-renders.

## Imperative rendering

```js
import { renderIcon } from "@mal-icons/web";
import FiActivity from "@mal-icons/web/fi/FiActivity.json" with { type: "json" };

document.body.appendChild(
  renderIcon(FiActivity, { size: 24, title: "Status" }),
);
```

## Lazy / CDN loading

```js
import { cdnLoader, defineMalIcon } from "@mal-icons/web";

const load = cdnLoader("https://cdn.example.com/mal-icons/fi");
const data = await load("FiActivity");

// Wire the loader into the custom element for on-demand resolution:
defineMalIcon("mal-icons", load);
```

```html
<!-- resolves <baseUrl>/<name>.json via the loader, or a direct src URL -->
<mal-icons name="FiActivity"></mal-icons>
<mal-icons src="https://cdn.example.com/fi/FiActivity.json"></mal-icons>
```

## API

| Export          | Description                                              |
| --------------- | -------------------------------------------------------- |
| `renderIcon`    | Build an `<svg>` from `IconData` (no `innerHTML`)        |
| `defineMalIcon` | Register the `<mal-icons>` element (optional CDN loader) |
| `registerIcons` | Seed the registry for synchronous `name` resolution      |
| `clearRegistry` | Clear the registry (tests)                               |
| `cdnLoader`     | Build a validating loader for `<baseUrl>/<name>.json`    |
| `isIconData`    | Type guard validating an unknown payload                 |
| `IconLoader`    | `(name: string) => Promise<IconData>` type               |

### `<mal-icons>` attributes

`name`, `src`, `size`, `color`, `weight`, `animate`, `title`, `class`.

## Animations

```js
import { ICON_ANIMATIONS_CSS } from "@mal-icons/core";

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>${ICON_ANIMATIONS_CSS}</style>`,
);
```

```html
<mal-icons name="FiLoader" animate="spin"></mal-icons>
```

## Pitfalls

- `registerIcons` before using `name=` synchronously, or supply a `cdnLoader`.
- Point the CDN loader only at trusted origins (payloads are validated by
  `isIconData`).
- Import per-icon JSON with the import attribute: `with { type: "json" }`.
