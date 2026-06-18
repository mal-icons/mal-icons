<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 11a8.1 8.1 0 0 0 -6.99 -6.92a8.09 8.09 0 0 0 -4.31 0.62m-2.38 1.61a8.09 8.09 0 0 0 -1.33 1.69"}],["path",{"d":"M4 13a8.1 8.1 0 0 0 13.69 4.68"}],["path",{"d":"M20 16a1 1 0 0 0 -1 -1"}],["path",{"d":"M4 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M9.89 9.87a3 3 0 1 0 4.23 4.25m0.6 -3.4a3.01 3.01 0 0 0 -1.43 -1.43"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
