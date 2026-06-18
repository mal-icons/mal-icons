<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 10l-0.45 4.1a8.36 8.36 0 0 1 -5.18 6.83a1 1 0 0 1 -0.74 0a8.36 8.36 0 0 1 -5.18 -6.83l-0.45 -4.1"}],["path",{"d":"M13 3a4.9 4.9 0 0 0 -1 3"}],["path",{"d":"M8 6h8a3 3 0 0 1 3 3a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
