import type { IconData } from "@mal-icons/core";
import { type ComponentType, createElement, useEffect, useState } from "react";
import { IconBase, type IconBaseProps } from "./icon-base.tsx";

export type { IconData };

/**
 * What a loader may resolve a name to: either a ready-made icon component
 * (e.g. from a dynamically imported set barrel, preserving tree-shaking of
 * statically imported icons) or raw {@link IconData} (e.g. fetched from a
 * CDN as JSON).
 */
export type IconResolved = ComponentType<IconBaseProps> | IconData;

/** Resolve an icon name to a component or icon data, possibly async. */
export type IconLoader = (name: string) => Promise<IconResolved>;

const cache = new Map<string, IconResolved>();
const inflight = new Map<string, Promise<IconResolved>>();
let defaultLoader: IconLoader | undefined;

/** Register the loader used by {@link Icon} when no `loader` prop is given. */
export function setDefaultIconLoader(loader: IconLoader | undefined): void {
  defaultLoader = loader;
}

/** Seed the resolution cache so an icon renders synchronously (e.g. SSR). */
export function preloadIcon(name: string, resolved: IconResolved): void {
  cache.set(name, resolved);
}

/** Clear the in-memory resolution cache (primarily for tests). */
export function clearIconCache(): void {
  cache.clear();
  inflight.clear();
}

function resolve(name: string, loader: IconLoader): Promise<IconResolved> {
  const cached = cache.get(name);
  if (cached) return Promise.resolve(cached);
  let pending = inflight.get(name);
  if (!pending) {
    pending = loader(name).then((r) => {
      cache.set(name, r);
      inflight.delete(name);
      return r;
    });
    inflight.set(name, pending);
  }
  return pending;
}

function isIconData(value: IconResolved): value is IconData {
  return typeof value === "object" && value !== null && Array.isArray((value as IconData).nodes);
}

/** Props for {@link Icon}. */
export interface DynamicIconProps extends IconBaseProps {
  /** Icon name to resolve, e.g. `"FiActivity"` or a CDN id like `"fi-activity"`. */
  name: string;
  /** Loader to resolve the name; falls back to the default loader. */
  loader?: IconLoader;
  /** Rendered while the icon is loading (defaults to nothing). */
  fallback?: React.ReactNode;
}

/**
 * Render an icon resolved lazily by name. Supports dynamic-by-name (SRS
 * §16.4), CDN lazy loading (FR-9), and sprite-free code splitting. The
 * resolved value is cached so repeated uses and re-renders never refetch,
 * and the icon renders synchronously when already cached or preloaded.
 */
export function Icon({ name, loader, fallback = null, ...rest }: DynamicIconProps) {
  const activeLoader = loader ?? defaultLoader;
  const [resolved, setResolved] = useState<IconResolved | undefined>(() => cache.get(name));

  useEffect(() => {
    const cached = cache.get(name);
    if (cached) {
      setResolved(cached);
      return;
    }
    if (!activeLoader) return;
    let active = true;
    resolve(name, activeLoader)
      .then((r) => {
        if (active) setResolved(r);
      })
      .catch(() => {
        /* swallow; fallback stays rendered */
      });
    return () => {
      active = false;
    };
  }, [name, activeLoader]);

  if (!resolved) return <>{fallback}</>;

  if (!isIconData(resolved)) {
    const Component = resolved;
    return <Component {...rest} />;
  }

  return (
    <IconBase viewBox={resolved.viewBox} {...(resolved.defaultAttr as IconBaseProps)} {...rest}>
      {resolved.nodes.map(([tag, attr], i) => createElement(tag, { key: i, ...attr }))}
    </IconBase>
  );
}

/**
 * Build a loader that fetches `<baseUrl>/<name>.json` and expects an
 * {@link IconData} payload. No `dangerouslySetInnerHTML`: the JSON shape is
 * validated and rendered through React elements only (NFR-7).
 */
export function cdnLoader(baseUrl: string, fetchImpl: typeof fetch = fetch): IconLoader {
  const base = baseUrl.replace(/\/+$/, "");
  return async (name) => {
    const res = await fetchImpl(`${base}/${name}.json`);
    if (!res.ok) throw new Error(`mal-icons: failed to load "${name}" (${res.status})`);
    const data = (await res.json()) as IconData;
    if (typeof data?.viewBox !== "string" || !Array.isArray(data?.nodes)) {
      throw new Error(`mal-icons: malformed icon payload for "${name}"`);
    }
    return { viewBox: data.viewBox, nodes: data.nodes, defaultAttr: data.defaultAttr };
  };
}

/**
 * Build a loader backed by a dynamically imported set barrel. Only the
 * referenced set's module is fetched, and named components are resolved by
 * key, e.g. `setLoader(() => import("@mal-icons/react/fi"))`.
 */
export function setLoader(
  importer: () => Promise<Record<string, ComponentType<IconBaseProps>>>,
): IconLoader {
  let modulePromise: Promise<Record<string, ComponentType<IconBaseProps>>> | undefined;
  return async (name) => {
    if (!modulePromise) modulePromise = importer();
    const mod = await modulePromise;
    const component = mod[name];
    if (!component) throw new Error(`mal-icons: "${name}" not found in set module`);
    return component;
  };
}
