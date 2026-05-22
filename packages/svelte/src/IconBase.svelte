<script lang="ts">
  import type { NodeTuple } from "@mal-icon/core";
  import { resolveIconAttrs } from "@mal-icon/core";
  import { getIconContext } from "./context.ts";

  interface Props {
    viewBox: string;
    nodes?: NodeTuple[];
    defaultAttr?: Record<string, unknown>;
    size?: string | number;
    color?: string;
    title?: string;
    className?: string;
    style?: string;
    [key: string]: unknown;
  }

  let {
    viewBox,
    nodes = [],
    defaultAttr = {},
    size = undefined,
    color = undefined,
    title = undefined,
    className = undefined,
    style = undefined,
    ...rest
  }: Props = $props();

  const conf = getIconContext();
  const resolved = resolveIconAttrs({ size, color, className }, conf);

  const mergedStyle = [
    resolved.color ? `color:${resolved.color}` : undefined,
    conf.style,
    style,
  ]
    .filter(Boolean)
    .join(";") || undefined;
</script>

<svg
  {viewBox}
  stroke="currentColor"
  fill="currentColor"
  stroke-width="0"
  width={resolved.size}
  height={resolved.size}
  class={resolved.className}
  style={mergedStyle}
  role={title ? "img" : "presentation"}
  aria-hidden={title ? undefined : "true"}
  {...conf.attr}
  {...defaultAttr}
  {...rest}
>
  {#if title}<title>{title}</title>{/if}
  {#each nodes as [tag, attr]}
    <svelte:element this={tag} {...attr} />
  {/each}
</svg>
