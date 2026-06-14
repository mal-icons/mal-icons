<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 15.09A1.5 1.5 0 0 1 9 16.5"}],["circle",{"cx":"18.5","cy":"8.5","r":"3.5"}],["circle",{"cx":"7.5","cy":"16.5","r":"5.5"}],["circle",{"cx":"7.5","cy":"4.5","r":"2.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
