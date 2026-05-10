<script lang="ts">
  import type { NodeTuple } from "@mal-icon/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["line",{"x1":"8","y1":"12","x2":"16","y2":"12"}],["line",{"x1":"12","y1":"16","x2":"12","y2":"16"}],["line",{"x1":"12","y1":"8","x2":"12","y2":"8"}],["circle",{"cx":"12","cy":"12","r":"10"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
