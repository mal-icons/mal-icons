<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.93 21.12c-1.1-2.94-1.64-6.03-1.64-9.12s0.55-6.18 1.64-9.12c0.05-0.110.07-0.220.07-0.31 0-0.34-0.24-0.57-0.64-0.57H4.62c-0.4 0-0.630.23-0.630.57 0 0.10.020.20.060.31C5.16 5.82 5.7 8.91 5.7 12s-0.55 6.18-1.64 9.12c-0.050.11-0.070.22-0.070.31 0 0.330.230.570.630.57h14.75c0.39 0 0.63-0.240.63-0.57 0-0.1-0.02-0.2-0.07-0.31z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
