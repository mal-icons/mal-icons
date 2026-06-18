<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 6h5a3 3 0 0 1 3 3v5m-0.89 3.13a2.99 2.99 0 0 1 -2.11 0.87h-6a3 3 0 0 1 -3 -3v-6c0 -0.82 0.33 -1.56 0.86 -2.1"}],["path",{"d":"M9 18v3h6v-3"}],["path",{"d":"M9 5v-2h6v3"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
