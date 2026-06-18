<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 12a9 9 0 1 0 -8.01 8.95"}],["path",{"d":"M9 10h0.01"}],["path",{"d":"M15 10h0.01"}],["path",{"d":"M9.5 15a3.59 3.59 0 0 0 2.77 0.99"}],["path",{"d":"M18.99 21.5l2.52 -2.58a1.74 1.74 0 0 0 0 -2.41a1.63 1.63 0 0 0 -2.35 0l-0.17 0.17l-0.17 -0.17a1.63 1.63 0 0 0 -2.35 0a1.74 1.74 0 0 0 0 2.41l2.51 2.59"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
