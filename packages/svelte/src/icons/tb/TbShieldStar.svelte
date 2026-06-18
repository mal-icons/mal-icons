<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.14 20.74a12 12 0 0 1 -7.64 -14.74a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3c0.5 1.72 0.61 3.51 0.34 5.24"}],["path",{"d":"M17.8 20.82l-2.17 1.14a0.39 0.39 0 0 1 -0.57 -0.41l0.42 -2.41l-1.76 -1.71a0.39 0.39 0 0 1 0.22 -0.66l2.43 -0.35l1.09 -2.19a0.39 0.39 0 0 1 0.7 0l1.09 2.19l2.43 0.35a0.39 0.39 0 0 1 0.22 0.67l-1.76 1.71l0.41 2.41a0.39 0.39 0 0 1 -0.57 0.41l-2.17 -1.14"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
