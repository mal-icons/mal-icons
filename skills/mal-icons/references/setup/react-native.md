# Setup — React Native (`@mal-icons/react-native`)

React Native adapter. The same icon set renders natively on iOS and Android via
[`react-native-svg`](https://github.com/software-mansion/react-native-svg) — no
WebView. The prop surface and `IconContext` theming mirror the React adapter.

## Install

```bash
bun add @mal-icons/react-native react-native-svg
# or
npm install @mal-icons/react-native react-native-svg
```

> Peer dependencies: `react >=18`, `react-native >=0.70`,
> `react-native-svg >=13`. Follow the `react-native-svg` install steps for your
> project (Expo or bare).

## Quick start

```tsx
import { FiActivity } from "@mal-icons/react-native/fi";

export function Status() {
  return <FiActivity size={24} color="#3366ff" title="Status" />;
}
```

## Import styles

```ts
import FiSearch from "@mal-icons/react-native/fi/FiSearch"; // per-icon (default)
import { FiSearch } from "@mal-icons/react-native/fi"; // set barrel (named)
import { FiSearch } from "@mal-icons/react-native"; // package root (named)
```

## Props

| Prop    | Type               | Notes                            |
| ------- | ------------------ | -------------------------------- |
| `size`  | `number \| string` | Width/height (plain numbers)     |
| `color` | `string`           | Overrides `currentColor`         |
| `title` | `string`           | a11y label for screen readers    |
| `style` | `StyleProp`        | Style passed to the root `<Svg>` |

## App-wide theming

```tsx
import { IconContext } from "@mal-icons/react-native";

export function App() {
  return (
    <IconContext.Provider value={{ size: 20, color: "#3366ff" }}>
      <Screen />
    </IconContext.Provider>
  );
}
```

Per-icon props always override context.

## API

```ts
import {
  IconBase,
  createIcon,
  IconContext,
  DefaultIconContext,
} from "@mal-icons/react-native";
```

## Pitfalls

- **No CSS** — `animate` and `secondaryColor`/`--mal-icons-secondary` do not
  apply on native. Use `react-native-svg` / Reanimated for motion.
- You must install and configure the `react-native-svg` peer dependency.
- Named per-icon import → type error (use default).
