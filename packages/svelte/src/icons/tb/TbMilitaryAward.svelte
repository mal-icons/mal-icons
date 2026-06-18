<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 13a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M8.5 10.5l-1 -2.5h-5.5l2.48 5.79a2 2 0 0 0 1.84 1.21h2.18"}],["path",{"d":"M15.5 10.5l1 -2.5h5.5l-2.48 5.79a2 2 0 0 1 -1.84 1.21h-2.18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
