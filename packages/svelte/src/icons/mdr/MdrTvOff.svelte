<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 8v9.88l1.85 1.85c0.1-0.220.15-0.470.15-0.73V7a2 2 0 0 0-2-2h-7.59l2.94-2.94c0.2-0.20.2-0.51 0-0.71s-0.51-0.2-0.71 0L12 4.99 8.36 1.35c-0.2-0.2-0.51-0.2-0.71 0s-0.20.51 0 0.71L10.59 5H8.12l2 2H20c0.55 0 1 0.45 1 1zM3.12 2.83a11 0 1 0-1.41 1.41l0.820.82C1.65 5.28 1 6.06 1 7v12c0 1.10.9 2 2 2h15.46l1.29 1.29c0.390.39 1.020.39 1.41 0 0.36-0.360.37-0.920.07-1.31h0.03L3.12 2.83zM3 18V8c0-0.550.45-1 1-1h0.46l12 12H4c-0.55 0-1-0.45-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
