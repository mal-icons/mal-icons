<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"6","cy":"6","r":"3"}],["circle",{"cx":"6","cy":"18","r":"3"}],["line",{"x1":"20","y1":"4","x2":"8.12","y2":"15.88"}],["line",{"x1":"14.47","y1":"14.48","x2":"20","y2":"20"}],["line",{"x1":"8.12","y1":"8.12","x2":"12","y2":"12"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
