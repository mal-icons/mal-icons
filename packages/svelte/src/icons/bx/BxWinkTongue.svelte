<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.5 9c-2 0-2.5 2-2.5 2h5s-0.5-2-2.5-2z"}],["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-2 16v-3h4v3c0 1.1-0.9 2-2 2s-2-0.9-2-2zm5.86 1c0.09-0.320.14-0.660.14-1v-1.5C17.59 15.03 18 13 18 13H6s0.41 2.03 2 3.5V18c0 0.350.060.680.14 1A8.01 8.01 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8a8.01 8.01 0 0 1-4.14 7.01z"}],["circle",{"cx":"8.5","cy":"9.5","r":"1.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
