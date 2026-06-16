<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 16H5V5h14v14z"}],["circle",{"cx":"7.5","cy":"16.5","r":"1.5"}],["circle",{"cx":"7.5","cy":"7.5","r":"1.5"}],["circle",{"cx":"12","cy":"12","r":"1.5"}],["circle",{"cx":"16.5","cy":"16.5","r":"1.5"}],["circle",{"cx":"16.5","cy":"7.5","r":"1.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
