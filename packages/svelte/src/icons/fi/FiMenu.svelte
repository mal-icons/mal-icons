<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["line",{"x1":"3","y1":"12","x2":"21","y2":"12"}],["line",{"x1":"3","y1":"6","x2":"21","y2":"6"}],["line",{"x1":"3","y1":"18","x2":"21","y2":"18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
