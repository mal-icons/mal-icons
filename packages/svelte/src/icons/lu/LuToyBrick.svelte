<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"width":"18","height":"12","x":"3","y":"8","rx":"1"}],["path",{"d":"M10 8V5c0-0.6-0.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{"d":"M19 8V5c0-0.6-0.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
