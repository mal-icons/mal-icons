# mal-icons · React Native example

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
  <FiActivity />                    {/* inherits size + color  */}
  <FiActivity size={48} color="#ec4899" />  {/* props override */}
</IconContext.Provider>;
```
