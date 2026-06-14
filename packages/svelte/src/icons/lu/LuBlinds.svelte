<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3h18"}],["path",{"d":"M20 7H8"}],["path",{"d":"M20 11H8"}],["path",{"d":"M10 19h10"}],["path",{"d":"M8 15h12"}],["path",{"d":"M4 3v14"}],["circle",{"cx":"4","cy":"19","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
