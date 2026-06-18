<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 7a8 4 0 1 0 16 0a8 4 0 1 0 -16 0"}],["path",{"d":"M4 7c0 0.66 0.09 1.32 0.26 1.97l2.74 10.04c0.5 1.5 2.24 2 5 2s4.5 -0.5 5 -2c0.33 -1 1.25 -4.34 2.74 -10.03a7.45 7.45 0 0 0 0.26 -1.96"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
