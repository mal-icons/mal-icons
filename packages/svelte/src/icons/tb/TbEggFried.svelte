<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14 3a5 5 0 0 1 4.87 6.13a3 3 0 0 1 0.18 5.68a3 3 0 1 1 -4.68 3.63a5 5 0 1 1 -8.66 -5a5 5 0 1 1 4.64 -8.86a4.98 4.98 0 0 1 3.65 -1.58l0 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
