<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 16h4v4"}],["path",{"d":"M19.46 11.04c0.86 -2.37 0.72 -4.58 -0.6 -5.9c-2.27 -2.27 -7.18 -1.04 -10.97 2.74c-3.79 3.79 -5.02 8.7 -2.74 10.97c2.23 2.23 6.99 1.09 10.74 -2.51"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
