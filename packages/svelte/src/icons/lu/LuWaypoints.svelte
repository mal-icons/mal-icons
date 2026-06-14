<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m10.59 5.41-5.17 5.17"}],["path",{"d":"m18.59 13.41-5.17 5.17"}],["path",{"d":"M6 12h12"}],["circle",{"cx":"12","cy":"20","r":"2"}],["circle",{"cx":"12","cy":"4","r":"2"}],["circle",{"cx":"20","cy":"12","r":"2"}],["circle",{"cx":"4","cy":"12","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
