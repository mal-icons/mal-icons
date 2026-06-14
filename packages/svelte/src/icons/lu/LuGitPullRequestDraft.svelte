<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"18","cy":"18","r":"3"}],["circle",{"cx":"6","cy":"6","r":"3"}],["path",{"d":"M18 6V5"}],["path",{"d":"M18 11v-1"}],["line",{"x1":"6","x2":"6","y1":"9","y2":"21"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
