<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 7h5a1 1 0 0 1 1 1v4.5c0 0.15 -0.01 0.3 -0.04 0.45m-2 2.01c-0.15 0.03 -0.3 0.04 -0.46 0.04h-0.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-0.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1h3"}],["path",{"d":"M10 17a2 2 0 0 0 2 2h3.5a5.48 5.48 0 0 0 2.77 -0.74m2 -2c0.47 -0.81 0.74 -1.75 0.74 -2.76v-9.5"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
