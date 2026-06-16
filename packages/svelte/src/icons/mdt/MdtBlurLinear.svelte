<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 16.5c0.28 0 0.5-0.220.5-0.5s-0.22-0.5-0.5-0.5-0.50.22-0.50.50.220.50.50.5z"}],["circle",{"cx":"9","cy":"12","r":"1"}],["circle",{"cx":"13","cy":"8","r":"1"}],["circle",{"cx":"13","cy":"16","r":"1"}],["path",{"d":"M17 12.5c0.28 0 0.5-0.220.5-0.5s-0.22-0.5-0.5-0.5-0.50.22-0.50.50.220.50.50.5z"}],["circle",{"cx":"13","cy":"12","r":"1"}],["path",{"d":"M3 3h18v2H3z"}],["circle",{"cx":"5","cy":"8","r":"1.5"}],["circle",{"cx":"5","cy":"12","r":"1.5"}],["circle",{"cx":"5","cy":"16","r":"1.5"}],["path",{"d":"M17 8.5c0.28 0 0.5-0.220.5-0.5s-0.22-0.5-0.5-0.5-0.50.22-0.50.50.220.50.50.5z"}],["circle",{"cx":"9","cy":"16","r":"1"}],["circle",{"cx":"9","cy":"8","r":"1"}],["path",{"d":"M3 19h18v2H3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
