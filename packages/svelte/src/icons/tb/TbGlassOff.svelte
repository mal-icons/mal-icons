<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 21h8"}],["path",{"d":"M12 16v5"}],["path",{"d":"M17 5l1 6c0 0.89 -0.23 1.69 -0.65 2.37m-2.08 1.89c-0.94 0.48 -2.06 0.74 -3.27 0.74c-3.31 0 -6 -1.99 -6 -5l0.71 -4.27"}],["path",{"d":"M10.98 6.96c0.33 0.03 0.67 0.04 1.02 0.04c2.76 0 5 -0.89 5 -2s-2.24 -2 -5 -2c-1.72 0 -3.23 0.35 -4.13 0.87"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
