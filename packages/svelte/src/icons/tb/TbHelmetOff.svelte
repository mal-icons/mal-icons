<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.63 4.65a9 9 0 0 1 11.72 11.7m-1.5 2.49a9.01 9.01 0 0 1 -1.19 1.16h-11.31a9 9 0 0 1 -0.18 -13.85"}],["path",{"d":"M20 9h-7m-2.77 1.25c0.51 2 1.6 3.42 3.27 4.25c0.52 0.26 1.07 0.49 1.64 0.68"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
