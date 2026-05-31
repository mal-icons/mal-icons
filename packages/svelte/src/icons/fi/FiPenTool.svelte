<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 19l7-7 3 3-7 7-3-3z"}],["path",{"d":"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}],["path",{"d":"M2 2l7.59 7.59"}],["circle",{"cx":"11","cy":"11","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
