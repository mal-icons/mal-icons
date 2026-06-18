<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 9h-2a3 3 0 1 1 0 -6h7"}],["path",{"d":"M11 3v11"}],["path",{"d":"M15 3v11"}],["path",{"d":"M21 18h-18"}],["path",{"d":"M18 15l3 3l-3 3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
