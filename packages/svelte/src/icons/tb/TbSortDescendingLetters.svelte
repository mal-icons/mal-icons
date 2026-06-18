<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 21v-5c0 -1.38 0.62 -2 2 -2s2 0.62 2 2v5m0 -3h-4"}],["path",{"d":"M19 10h-4l4 -7h-4"}],["path",{"d":"M4 15l3 3l3 -3"}],["path",{"d":"M7 6v12"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
