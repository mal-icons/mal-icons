<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"12","r":"10"}],["circle",{"cx":"12","cy":"10","r":"3"}],["path",{"d":"M7 20.66V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.66"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
