<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 8h0.01"}],["path",{"d":"M4 15l4 -4c0.93 -0.89 2.07 -0.89 3 0l5 5"}],["path",{"d":"M14 14l1 -1c0.93 -0.89 2.07 -0.89 3 0l2 2"}],["path",{"d":"M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
