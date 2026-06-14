<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.43 12.94c0.36-0.970.57-1.950.57-2.93a8 8 0 0 0-16 0c0 4.99 5.54 10.19 7.4 11.8a1 1 0 0 0 1.2 0 32.2 32.2 0 0 0 0.81-0.73"}],["circle",{"cx":"12","cy":"10","r":"3"}],["path",{"d":"m16 18 2 2 4-4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
