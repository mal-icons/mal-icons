<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.83 20.41l-5.37 -6.91c-0.61 -0.78 -0.61 -2.22 0 -3l5.38 -6.91a1.46 1.46 0 0 1 2.34 0l5.38 6.91c0.61 0.78 0.61 2.22 0 3l-5.37 6.91a1.46 1.46 0 0 1 -2.34 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
