<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"12","r":"10"}],["line",{"x1":"8","y1":"15","x2":"16","y2":"15"}],["line",{"x1":"9","y1":"9","x2":"9.01","y2":"9"}],["line",{"x1":"15","y1":"9","x2":"15.01","y2":"9"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
