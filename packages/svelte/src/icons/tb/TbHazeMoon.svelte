<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 16h18"}],["path",{"d":"M3 20h18"}],["path",{"d":"M8.3 16c-2.27 -1.4 -3.6 -4.09 -3.24 -6.92c0.44 -3.48 3.31 -6.08 6.7 -6.08v0.01h0.3c-1.99 1.92 -2.38 5.03 -0.92 7.41c1.46 2.37 4.35 3.33 6.87 2.28a6.89 6.89 0 0 1 -2.78 3.31"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
