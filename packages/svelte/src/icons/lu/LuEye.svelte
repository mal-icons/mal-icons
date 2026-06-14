<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.06 12.35a1 1 0 0 1 0-0.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 0.7 10.75 10.75 0 0 1-19.88 0"}],["circle",{"cx":"12","cy":"12","r":"3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
