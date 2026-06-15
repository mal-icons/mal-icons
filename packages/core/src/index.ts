/**
 * Framework-agnostic icon data model.
 *
 * At build time we emit compile-time component code, but this is the
 * intermediate, serializable model used by the pipeline and adapters.
 */
export interface IconNode {
  /** Element tag, e.g. "path", "g", "circle". */
  tag: string;
  /** Element attributes, e.g. `{ d: "M0 0..." }`. */
  attr: Record<string, string>;
  /** Nested child nodes. */
  child: IconNode[];
}

/**
 * A compact `[tag, attributes]` tuple used by the runtime `createIcon`
 * factory. Children are built once at module load, never per render.
 */
export type NodeTuple = [tag: string, attr: Record<string, string>];

/**
 * Minimal, serializable icon payload used by lazy/CDN and dynamic-by-name
 * loaders. Mirrors what `createIcon` needs to render without bundling the
 * whole set.
 */
export interface IconData {
  /** SVG viewBox, e.g. "0 0 24 24". */
  viewBox: string;
  /** Shape children as compact tuples. */
  nodes: NodeTuple[];
  /** Optional root attributes (e.g. `fill: "none"`) for stroke-style sets. */
  defaultAttr?: Record<string, string | number>;
}

/** A fully-described, deduplicatable icon definition. */
export interface IconDefinition {
  /** PascalCase component name, e.g. "FiActivity". */
  name: string;
  /** Set identifier, e.g. "fi" (Feather), "fa" (Font Awesome). */
  set: string;
  /** SVG viewBox, e.g. "0 0 24 24". */
  viewBox: string;
  /** Shape children of the icon. */
  nodes: IconNode[];
  /** Stable content hash, used for deduplication and determinism. */
  contentHash: string;
}

/** A single icon set entry within the manifest. */
export interface IconSetManifestEntry {
  /** Set identifier, e.g. "fa". */
  id: string;
  /** Human-readable name, e.g. "Font Awesome 6". */
  name: string;
  /** SPDX (or free-form) license identifier of the source set. */
  license: string;
  /** Number of icons in the set. */
  count: number;
}

/** Top-level manifest describing all available icon sets. */
export interface IconsManifest {
  sets: IconSetManifestEntry[];
}

/**
 * Runtime props accepted by every generated icon component.
 *
 * `St` is the framework-specific inline-style type, kept generic so
 * `core` stays framework-agnostic.
 */
export interface IconBaseProps<St = Record<string, unknown>> {
  /** Width and height. Defaults to "1em". */
  size?: string | number;
  /** Overrides `currentColor`. */
  color?: string;
  /** Accessible label; renders a `<title>` element. */
  title?: string;
  /** Additional class name(s). */
  className?: string;
  /** Inline styles. */
  style?: St;
}

/**
 * Theming configuration provided through a framework context/provider.
 * Per-icon props always override these context values.
 */
export interface IconContextValue<St = Record<string, unknown>> {
  color?: string;
  size?: string | number;
  className?: string;
  style?: St;
  /** Extra attributes spread onto the root `<svg>`. */
  attr?: Record<string, string>;
}

/** Resolved attributes returned by {@link resolveIconAttrs}. */
export interface ResolvedIconAttrs {
  size: string | number;
  color: string | undefined;
  className: string | undefined;
}

/**
 * Root `stroke`/`fill` for the `<svg>` wrapper.
 *
 * Single-tone icons default both to `currentColor` so they theme via the
 * `color` prop. Multicolor icons (e.g. Flat Color Icons) carry their own
 * per-shape paint; when `multicolor` is set we omit the `currentColor`
 * defaults so the icon's original colors show through instead of being
 * overridden.
 */
export function resolveRootPaint(multicolor?: boolean): Record<string, string> {
  return multicolor ? {} : { stroke: "currentColor", fill: "currentColor" };
}

/** Stroke weight presets for stroke-based icon sets. */
export type IconWeight = "thin" | "light" | "regular" | "bold";

/** Maps a {@link IconWeight} to a concrete SVG `stroke-width`. */
export const WEIGHT_STROKE_WIDTH: Record<IconWeight, number> = {
  thin: 1,
  light: 1.5,
  regular: 2,
  bold: 3,
};

/** CSS-driven animation presets applied via the `animate` prop. */
export type IconAnimation =
  | "spin"
  | "spin-reverse"
  | "pulse"
  | "beat"
  | "bounce"
  | "ping"
  | "shake"
  | "wiggle"
  | "float"
  | "heartbeat"
  | "flip"
  | "rotate"
  | "zoom"
  | "fade"
  | "slide"
  | "glow"
  | "swing"
  | "tada";

/** Class name applied to the root `<svg>` for a given animation. */
export function animationClass(animation: IconAnimation): string {
  return `mal-icons-animate-${animation}`;
}

/**
 * CSS keyframes + classes backing {@link IconAnimation}. Consumers inject
 * this once (e.g. a `<style>` tag); animations are pure CSS so they add no
 * JS cost and only animate the icons that opt in (SRS §16.2).
 */
export const ICON_ANIMATIONS_CSS = `@keyframes mal-icons-spin{to{transform:rotate(360deg)}}
@keyframes mal-icons-pulse{0%,100%{opacity:1}50%{opacity:.4}}
@keyframes mal-icons-beat{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
@keyframes mal-icons-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-15%)}}
@keyframes mal-icons-ping{0%{transform:scale(1);opacity:1}75%,100%{transform:scale(1.8);opacity:0}}
@keyframes mal-icons-shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-12%)}40%,80%{transform:translateX(12%)}}
@keyframes mal-icons-wiggle{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}
@keyframes mal-icons-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12%)}}
@keyframes mal-icons-heartbeat{0%,28%,70%,100%{transform:scale(1)}14%,42%{transform:scale(1.2)}}
@keyframes mal-icons-flip{0%{transform:perspective(400px) rotateY(0)}100%{transform:perspective(400px) rotateY(360deg)}}
@keyframes mal-icons-rotate{0%{transform:rotate(0)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}
@keyframes mal-icons-zoom{0%,100%{transform:scale(1)}50%{transform:scale(1.4)}}
@keyframes mal-icons-fade{0%,100%{opacity:1}50%{opacity:.1}}
@keyframes mal-icons-slide{0%,100%{transform:translateX(0)}50%{transform:translateX(18%)}}
@keyframes mal-icons-glow{0%,100%{filter:drop-shadow(0 0 0 currentColor)}50%{filter:drop-shadow(0 0 4px currentColor)}}
@keyframes mal-icons-swing{0%,100%{transform:rotate(0)}20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}}
@keyframes mal-icons-tada{0%,100%{transform:scale(1) rotate(0)}10%,20%{transform:scale(.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale(1.1) rotate(3deg)}40%,60%,80%{transform:scale(1.1) rotate(-3deg)}}
.mal-icons-animate-spin{animation:mal-icons-spin 1s linear infinite;will-change:transform}
.mal-icons-animate-spin-reverse{animation:mal-icons-spin 1s linear infinite reverse;will-change:transform}
.mal-icons-animate-pulse{animation:mal-icons-pulse 1.5s ease-in-out infinite}
.mal-icons-animate-beat{animation:mal-icons-beat 1s ease-in-out infinite;will-change:transform}
.mal-icons-animate-bounce{animation:mal-icons-bounce 1s ease infinite;will-change:transform}
.mal-icons-animate-ping{animation:mal-icons-ping 1s cubic-bezier(0,0,.2,1) infinite;will-change:transform,opacity}
.mal-icons-animate-shake{animation:mal-icons-shake .8s ease-in-out infinite;will-change:transform}
.mal-icons-animate-wiggle{animation:mal-icons-wiggle .6s ease-in-out infinite;will-change:transform}
.mal-icons-animate-float{animation:mal-icons-float 3s ease-in-out infinite;will-change:transform}
.mal-icons-animate-heartbeat{animation:mal-icons-heartbeat 1.3s ease-in-out infinite;will-change:transform}
.mal-icons-animate-flip{animation:mal-icons-flip 1.2s ease-in-out infinite;will-change:transform}
.mal-icons-animate-rotate{animation:mal-icons-rotate 1.5s ease-in-out infinite;will-change:transform}
.mal-icons-animate-zoom{animation:mal-icons-zoom 1.2s ease-in-out infinite;will-change:transform}
.mal-icons-animate-fade{animation:mal-icons-fade 1.5s ease-in-out infinite}
.mal-icons-animate-slide{animation:mal-icons-slide 1s ease-in-out infinite;will-change:transform}
.mal-icons-animate-glow{animation:mal-icons-glow 1.5s ease-in-out infinite}
.mal-icons-animate-swing{animation:mal-icons-swing 1s ease-in-out infinite;transform-origin:top center;will-change:transform}
.mal-icons-animate-tada{animation:mal-icons-tada 1s ease-in-out infinite;will-change:transform}
@media (prefers-reduced-motion:reduce){[class*=mal-icons-animate-]{animation:none}}
`;

/**
 * Resolve the final size/color/className given per-icon props and the
 * surrounding context, following the SRS override priority:
 *
 * ```
 * props.color  > context.color
 * props.size   > context.size  > "1em"
 * className = context.className + " " + props.className
 * ```
 */
export function resolveIconAttrs(
  props: { size?: string | number; color?: string; className?: string },
  context: { size?: string | number; color?: string; className?: string },
): ResolvedIconAttrs {
  const size = props.size ?? context.size ?? "1em";
  const color = props.color ?? context.color;
  const className = [context.className, props.className].filter(Boolean).join(" ") || undefined;
  return { size, color, className };
}
