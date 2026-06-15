<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.1 1.85c-9.59 3-5.32 9.62-4.06 10.27 2.13 1.11-1.15 3.57-1.15 3.57s2.82-0.82 6.4-1.19c4.31-0.44 9.16-1.07 9.59-3.47 0.8-4.39-2.4-11.81-10.78-9.19zM10 5c0.55 0 1 0.45 1 1 0 0.55-0.45 1-1 1-0.55 0-1-0.45-1-1 0-0.55 0.45-1 1-1zM5 5.5c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zM3.7 9.45c3.2 2.86 9.6-0.95 9.6-0.95-5.54 6.14-9.6 0.95-9.6 0.95z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
