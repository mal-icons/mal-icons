<script lang="ts">
  import type { NodeTuple } from "@mal-icon/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polyline",{"points":"21 8 21 21 3 21 3 8"}],["rect",{"x":"1","y":"3","width":"22","height":"5"}],["line",{"x1":"10","y1":"12","x2":"14","y2":"12"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
