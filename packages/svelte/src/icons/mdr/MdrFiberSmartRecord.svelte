<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"9","cy":"12","r":"8"}],["path",{"d":"M17 5.55v0.18c0 0.370.230.690.570.85C19.6 7.54 21 9.61 21 12s-1.4 4.46-3.43 5.42c-0.340.16-0.570.47-0.570.84v0.18c0 0.680.71 1.11 1.320.82C21.08 18.01 23 15.23 23 12s-1.92-6.01-4.68-7.27c-0.61-0.28-1.320.14-1.320.82z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
