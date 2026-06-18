<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.14 3.13a3 3 0 0 1 0.86 -0.12h8a3 3 0 0 1 3 3v9m-0.13 3.87a3 3 0 0 1 -2.87 2.13h-8a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 0.13 -0.87"}],["path",{"d":"M11.18 11.18a2 2 0 1 0 2.64 2.67"}],["path",{"d":"M10 6h4"}],["path",{"d":"M9 18h6"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
