<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{"d":"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{"x1":"4","x2":"20","y1":"12","y2":"12"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
