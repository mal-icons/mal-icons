# mal-icons · Vue example

> **Stack:** Vite 6 · Vue 3.5 · TypeScript · [`@mal-icons/vue`](../../packages/vue)

An interactive icon gallery showcasing the Vue 3 adapter — tree-shakeable
imports, `provide`/`inject` theming, and reactive live search.

## What it demonstrates

- **Direct, tree-shakeable imports** — `import { FiActivity } from "@mal-icons/vue/fi"`.
- **Context theming** — app-wide `size` and `color` via `provideIconContext` with a reactive context object; per-icon props still override.
- **Live search** over a curated Feather set.

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- Build the workspace packages once from the **repository root**:

  ```bash
  bun install
  bun run build
  ```

## Run

```bash
cd examples/vue
bun install
bun run dev
```

Open the printed local URL (e.g. <http://localhost:5173>).

### Scripts

| Script            | Description                                        |
| ----------------- | -------------------------------------------------- |
| `bun run dev`     | Start the Vite dev server with HMR                 |
| `bun run build`   | Type-check (`vue-tsc --noEmit`) + production build |
| `bun run preview` | Preview the production build locally               |

## Project structure

```
examples/vue/
├─ index.html
├─ vite.config.ts      # resolves @mal-icons/* to source (dev only)
└─ src/
   ├─ main.ts          # Vue app bootstrap
   ├─ App.vue          # gallery UI, controls, search
   ├─ icons.ts         # curated icon list
   └─ styles.css
```

## How theming works

```vue
<script setup lang="ts">
import { reactive } from "vue";
import { provideIconContext } from "@mal-icons/vue";

const theme = reactive({ size: 24, color: "#3366ff" });
provideIconContext(theme); // descendants react to changes; props still override
</script>
```

## Using it in your own app

The `vite.config.ts` resolves `@mal-icons/*` to TypeScript source via the
`"bun"` export condition so the example runs from the workspace. When consuming
the published npm package, delete that `resolve.conditions` block.

## Learn more

- Adapter API → [`@mal-icons/vue`](../../packages/vue)
- SSR variant → [`examples/nuxt`](../nuxt)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
