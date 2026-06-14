<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 18v4"}],["path",{"d":"m17 18 1.96-11.47"}],["path",{"d":"m3 8 7.82-5.61a2 2 0 0 1 2.36 0L21 8"}],["path",{"d":"M4 18h16"}],["path",{"d":"M7 18 5.04 6.53"}],["circle",{"cx":"12","cy":"10","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
