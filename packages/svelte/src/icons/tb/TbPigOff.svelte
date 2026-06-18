<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 11v0.01"}],["path",{"d":"M10 6h1.5l4.5 -3l0 3.8a6.02 6.02 0 0 1 2.66 3.2h1.34a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.34c-0.06 0.16 -0.12 0.32 -0.19 0.47m-1.47 2.53v1.5a1.5 1.5 0 0 1 -3 0v-0.58a6.04 6.04 0 0 1 -1 0.08h-4a6.04 6.04 0 0 1 -1 -0.08v0.58a1.5 1.5 0 0 1 -3 0v-2l0 -0.03a6 6 0 0 1 1.5 -9.93"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
