<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"5","cy":"6","r":"3"}],["path",{"d":"M5 9v6"}],["circle",{"cx":"5","cy":"18","r":"3"}],["path",{"d":"M12 3v18"}],["circle",{"cx":"19","cy":"6","r":"3"}],["path",{"d":"M16 15.7A9 9 0 0 0 19 9"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
