<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 21l-6 -6"}],["path",{"d":"M3.27 12.04a7.02 7.02 0 0 0 6.63 4.96a7.01 7.01 0 0 0 7.04 -6.13a7 7 0 0 0 -5.31 -7.67a7.02 7.02 0 0 0 -8.24 4.4"}],["path",{"d":"M3 4v4h4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
