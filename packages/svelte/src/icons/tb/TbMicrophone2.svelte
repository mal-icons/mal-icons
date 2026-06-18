<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 12.9a5 5 0 1 0 -3.9 -3.9"}],["path",{"d":"M15 12.9l-3.9 -3.9l-7.51 8.58a2 2 0 1 0 2.83 2.83l8.59 -7.51"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
