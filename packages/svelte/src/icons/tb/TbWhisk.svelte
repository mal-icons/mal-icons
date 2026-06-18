<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.02 3.04l-16.51 16.47"}],["path",{"d":"M3.17 17.62a4.63 4.63 0 0 0 3.28 3.26a4.67 4.67 0 0 0 4.49 -1.19c1.85 -1.84 4.07 -10.65 4.07 -10.65s-8.88 2.3 -10.64 4.13a4.59 4.59 0 0 0 -1.2 4.45"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
