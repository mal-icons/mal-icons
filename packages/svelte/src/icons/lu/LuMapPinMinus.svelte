<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.98 14C19.6 12.7 20 11.34 20 10a8 8 0 0 0-16 0c0 4.99 5.54 10.19 7.4 11.8a1 1 0 0 0 1.2 0 32 32 0 0 0 0.82-0.74"}],["circle",{"cx":"12","cy":"10","r":"3"}],["path",{"d":"M16 18h6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
