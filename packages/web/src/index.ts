import {
  animationClass,
  type IconAnimation,
  type IconData,
  resolveIconAttrs,
  WEIGHT_STROKE_WIDTH,
} from "@mal-icons/core";

export type { IconData };

const SVG_NS = "http://www.w3.org/2000/svg";

/** Theming + accessibility options accepted by {@link renderIcon}. */
export interface RenderIconProps {
  /** Width and height. Defaults to "1em". */
  size?: string | number;
  /** Overrides `currentColor`. */
  color?: string;
  /** Secondary color for multi-tone icons, exposed as `--mal-icons-secondary`. */
  secondaryColor?: string;
  /** CSS-driven animation preset; requires {@link ICON_ANIMATIONS_CSS} on the page. */
  animate?: IconAnimation;
  /** Stroke weight override for stroke-based sets. */
  weight?: keyof typeof WEIGHT_STROKE_WIDTH;
  /** Accessible label; renders a `<title>` element and sets `role="img"`. */
  title?: string;
  /** Additional class name(s). */
  className?: string;
}

/**
 * Build a native `<svg>` element from serializable {@link IconData}, with no
 * `innerHTML`: every shape is created through `createElementNS`, so the
 * markup is safe even when the data comes from an untrusted CDN.
 */
export function renderIcon(data: IconData, props: RenderIconProps = {}): SVGSVGElement {
  const { size, color, className } = resolveIconAttrs(
    { size: props.size, color: props.color, className: props.className },
    {},
  );

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", data.viewBox);
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("stroke-width", "0");
  if (data.defaultAttr) {
    for (const [k, v] of Object.entries(data.defaultAttr)) svg.setAttribute(k, String(v));
  }
  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));

  if (props.weight) svg.setAttribute("stroke-width", String(WEIGHT_STROKE_WIDTH[props.weight]));

  const fullClassName = [className, props.animate ? animationClass(props.animate) : undefined]
    .filter(Boolean)
    .join(" ");
  if (fullClassName) svg.setAttribute("class", fullClassName);

  if (color) svg.style.color = color;
  if (props.secondaryColor) svg.style.setProperty("--mal-icons-secondary", props.secondaryColor);

  if (props.title) {
    svg.setAttribute("role", "img");
    const title = document.createElementNS(SVG_NS, "title");
    title.textContent = props.title;
    svg.appendChild(title);
  } else {
    svg.setAttribute("role", "presentation");
    svg.setAttribute("aria-hidden", "true");
  }

  for (const [tag, attr] of data.nodes) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attr)) el.setAttribute(k, String(v));
    svg.appendChild(el);
  }

  return svg;
}

/** Validate that an unknown value has the {@link IconData} shape. */
export function isIconData(value: unknown): value is IconData {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as IconData).viewBox === "string" &&
    Array.isArray((value as IconData).nodes)
  );
}

/** Resolve an icon name to its serializable {@link IconData}, possibly async. */
export type IconLoader = (name: string) => Promise<IconData>;

/**
 * Build a loader that fetches `<baseUrl>/<name>.json` and expects an
 * {@link IconData} payload. The payload is validated and rendered through
 * `createElementNS` only — never `innerHTML`.
 */
export function cdnLoader(baseUrl: string, fetchImpl: typeof fetch = fetch): IconLoader {
  const base = baseUrl.replace(/\/+$/, "");
  return async (name) => {
    const res = await fetchImpl(`${base}/${name}.json`);
    if (!res.ok) throw new Error(`mal-icons: failed to load "${name}" (${res.status})`);
    const data: unknown = await res.json();
    if (!isIconData(data)) throw new Error(`mal-icons: malformed icon payload for "${name}"`);
    return data;
  };
}

/** In-memory registry backing the `<mal-icons>` element's `name` attribute. */
const registry = new Map<string, IconData>();

/** Register icon data so `<mal-icons name="…">` can render synchronously. */
export function registerIcons(icons: Record<string, IconData>): void {
  for (const [name, data] of Object.entries(icons)) registry.set(name, data);
}

/** Clear the icon registry (primarily for tests). */
export function clearRegistry(): void {
  registry.clear();
}

const NAME_ATTRS = ["size", "color", "title", "class", "weight", "animate"];

function readProps(el: Element): RenderIconProps {
  const props: RenderIconProps = {};
  const size = el.getAttribute("size");
  if (size !== null) props.size = size;
  const color = el.getAttribute("color");
  if (color !== null) props.color = color;
  const title = el.getAttribute("title");
  if (title !== null) props.title = title;
  const className = el.getAttribute("class");
  if (className !== null) props.className = className;
  const weight = el.getAttribute("weight");
  if (weight !== null && weight in WEIGHT_STROKE_WIDTH) {
    props.weight = weight as keyof typeof WEIGHT_STROKE_WIDTH;
  }
  const animate = el.getAttribute("animate");
  if (animate !== null) props.animate = animate as IconAnimation;
  return props;
}

/**
 * Register a `<mal-icons>` custom element. Usage from plain HTML:
 *
 * ```html
 * <mal-icons name="FiActivity" size="24" title="Status"></mal-icons>
 * <mal-icons src="https://cdn.example.com/fi/FiActivity.json"></mal-icons>
 * ```
 *
 * Icons resolve from the in-memory {@link registerIcons} registry, or from a
 * JSON `src` URL via {@link cdnLoader}.
 */
export function defineMalIcon(tagName = "mal-icons", loader?: IconLoader): void {
  if (typeof customElements === "undefined" || customElements.get(tagName)) return;

  class MalIconElement extends HTMLElement {
    static get observedAttributes(): string[] {
      return ["name", "src", ...NAME_ATTRS];
    }

    attributeChangedCallback(): void {
      this.render();
    }

    connectedCallback(): void {
      this.render();
    }

    private mount(data: IconData): void {
      this.replaceChildren(renderIcon(data, readProps(this)));
    }

    private render(): void {
      const name = this.getAttribute("name");
      if (name && registry.has(name)) {
        const data = registry.get(name);
        if (data) this.mount(data);
        return;
      }

      const src = this.getAttribute("src");
      let pending: Promise<IconData> | undefined;
      if (src) {
        pending = fetch(src).then(async (res) => {
          if (!res.ok) throw new Error(`mal-icons: failed to load "${src}" (${res.status})`);
          const data: unknown = await res.json();
          if (!isIconData(data)) throw new Error(`mal-icons: malformed icon payload at "${src}"`);
          return data;
        });
      } else if (name && loader) {
        pending = loader(name);
      }
      if (!pending) return;

      pending
        .then((data) => this.mount(data))
        .catch(() => {
          /* leave empty on failure */
        });
    }
  }

  customElements.define(tagName, MalIconElement);
}

export {
  animationClass,
  ICON_ANIMATIONS_CSS,
  type IconAnimation,
  WEIGHT_STROKE_WIDTH,
} from "@mal-icons/core";
