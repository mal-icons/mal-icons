<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.68 4.68c-2.17 4.78 -2.06 9.59 0.33 15.32"}],["path",{"d":"M19 4c1.96 3.92 2.38 7.83 1.27 12.23m-0.98 3.05c-0.09 0.24 -0.19 0.48 -0.29 0.72"}],["path",{"d":"M11.7 11.7c0.1 0.26 0.2 0.53 0.32 0.83c0.98 2.47 0.98 3.47 1.98 3.47h1"}],["path",{"d":"M8 16c1.5 0 3 -2 4 -3.5m2.02 -2.51c0.63 -0.58 1.3 -0.99 1.98 -0.99"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
