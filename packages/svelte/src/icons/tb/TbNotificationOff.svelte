<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.15 6.19a2 2 0 0 0 -1.15 1.81v9a2 2 0 0 0 2 2h9a2 2 0 0 0 1.81 -1.15"}],["path",{"d":"M14 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
