<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.22 5.84c-1.31 -0.15 -1.22 -0.58 -1.22 -0.79c0 -0.22 0.42 -1.04 4.34 -1.04c4.69 0 14.66 3.65 14.66 10.04s-8.71 4.93 -10.43 4.52c-1.72 -0.41 -5.56 -2.26 -5.56 -4.17c0 -1.39 3.08 -2.39 6.72 -2.39c3.63 0 5.29 1.04 5.29 2c0 0.5 -0.07 1.23 -1 1.5"}],["path",{"d":"M10.02 8a505.15 505.15 0 0 0 0 13"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
