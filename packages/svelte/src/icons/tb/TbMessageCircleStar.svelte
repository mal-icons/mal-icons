<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.52 19.87a9.76 9.76 0 0 1 -2.82 -0.87l-4.7 1l1.3 -3.9c-2.32 -3.44 -1.43 -7.87 2.1 -10.37c3.53 -2.5 8.59 -2.3 11.85 0.48c1.67 1.42 2.59 3.29 2.75 5.21"}],["path",{"d":"M17.8 20.82l-2.17 1.14a0.39 0.39 0 0 1 -0.57 -0.41l0.42 -2.41l-1.76 -1.71a0.39 0.39 0 0 1 0.22 -0.66l2.43 -0.35l1.09 -2.19a0.39 0.39 0 0 1 0.7 0l1.09 2.19l2.43 0.35a0.39 0.39 0 0 1 0.22 0.67l-1.76 1.71l0.41 2.41a0.39 0.39 0 0 1 -0.57 0.41l-2.17 -1.14"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
