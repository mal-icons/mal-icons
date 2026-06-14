<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 12.01h0.01"}],["path",{"d":"M18 8v4a8 8 0 0 1-1.07 4"}],["circle",{"cx":"10","cy":"12","r":"4"}],["rect",{"x":"2","y":"4","width":"20","height":"16","rx":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
