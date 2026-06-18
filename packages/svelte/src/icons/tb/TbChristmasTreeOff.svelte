<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.5 5.5l2.5 -2.5l4 4l-2 1l4 4l-1.5 0.5m0.5 4.5h-12l4 -4l-3 -1l3 -3"}],["path",{"d":"M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
