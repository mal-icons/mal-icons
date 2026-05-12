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
  const className =
    [context.className, props.className].filter(Boolean).join(" ") || undefined;
  return { size, color, className };
}
