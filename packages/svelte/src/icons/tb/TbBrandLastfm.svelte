<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 8c-0.83 -1 -1.39 -1 -2 -1c-0.61 0 -2 0.27 -2 2s1.38 2.23 3 3c1.62 0.77 2.13 1.81 2 3s-1 2 -3 2s-3 -1 -3.5 -2s-1.58 -4.78 -2.5 -6a5 5 0 1 0 -1 7"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
