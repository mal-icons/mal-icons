<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 6h5.43a1 1 0 0 1 0.86 0.5l1.06 1.82a3 3 0 0 0 1.9 1.41l4.68 1.11a4 4 0 0 1 3.07 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1"}],["path",{"d":"M14 13l1 -2"}],["path",{"d":"M8 18v-1a4 4 0 0 0 -4 -4h-1"}],["path",{"d":"M10 12l1.5 -3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
