<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0.35 5.85 1.5-1.5a0.50.5 0 0 0-0.71-0.71l-0.650.65V10.5a0.50.5 0 0 0-1 0v2.79l-0.65-0.65a0.50.5 0 0 0-0.710.71l1.5 1.5a0.50.5 0 0 0 0.71 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"}],["path",{"d":"M8.26 14a4.5 4.5 0 0 1-0.23-1H3c0-0.250.15-0.990.83-1.66C4.48 10.68 5.71 10 8 10q0.39 0 0.740.03c0.23-0.340.5-0.650.8-0.92Q8.84 9 8 9c-5 0-6 3-6 4s1 1 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
