# mal-icons · React Native example

> **Stack:** Expo 52 · React Native 0.76 · react-native-svg · [`@mal-icons/react-native`](../../packages/react-native)

An [Expo](https://expo.dev) app that renders the shared mal-icons gallery with
[`@mal-icons/react-native`](../../packages/react-native). Icons are real
[`react-native-svg`](https://github.com/software-mansion/react-native-svg)
components — no DOM, no CSS, no runtime string parsing.

## Highlights

- **`IconContext` theming** — `size` and `color` flow from a single provider, so
  every icon updates as you change the controls.
- **Per-icon props win** — chrome icons pass explicit `size`/`color` that
  override the context, matching the SRS override priority (`props > context >
default`).
- **Tree-shakeable subpath imports** — `@mal-icons/react-native/fi/FiActivity`
  pulls in exactly one icon.
- **Tap to copy** the import statement via `expo-clipboard`.

## Running

From the **repository root**, install and build the libraries once:

```bash
bun install
bun run build
```

Then start the app with the Expo CLI (use your platform of choice):

```bash
cd examples/react-native
npx expo start        # press i / a / w for iOS, Android, or web
```

> **Monorepo note.** [`metro.config.js`](./metro.config.js) watches the
> workspace root and resolves `@mal-icons/*` to their TypeScript source through
> the `"bun"` export condition. In a real app that installs the packages from
> npm, delete that block — Metro picks the published bundles automatically.
> Expo's tooling targets npm/yarn/pnpm; run the dev server with one of those.

## How theming works

```tsx
import { IconContext } from "@mal-icons/react-native";
import { FiActivity } from "@mal-icons/react-native/fi/FiActivity";

<IconContext.Provider value={{ size: 28, color: "#6366f1" }}>
  <FiActivity /> {/* inherits size + color  */}
  <FiActivity size={48} color="#ec4899" /> {/* props override */}
</IconContext.Provider>;
```

## Scripts

| Script            | Description                                 |
| ----------------- | ------------------------------------------- |
| `npx expo start`  | Start the Expo dev server (press i / a / w) |
| `npm run ios`     | Launch on the iOS simulator                 |
| `npm run android` | Launch on an Android emulator               |
| `npm run web`     | Run in the browser                          |
| `npm run export`  | Export a static web build                   |

## Project structure

```
examples/react-native/
├─ App.tsx            # gallery UI, IconContext theming, controls
├─ index.ts           # Expo entry
├─ metro.config.js    # watches the workspace; resolves @mal-icons/* to source
├─ babel.config.js
└─ src/
   └─ icons.ts        # curated icon list
```

## Learn more

- Adapter API → [`@mal-icons/react-native`](../../packages/react-native)
- All examples → [`examples/`](../README.md)
- Project home → <https://github.com/mal-icons/mal-icons>
