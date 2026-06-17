<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.5 11a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1M3 10.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0"}],["path",{"d":"M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-0.420.11-0.830.31-1.2l2.47-4.53A1.5 1.5 0 0 1 4.09 3h7.81a1.5 1.5 0 0 1 1.320.78l2.47 4.53c0.20.370.310.780.31 1.2zM3.66 4.26 1.59 8.04Q1.79 8 2 8h12q0.21 0 0.410.04L12.35 4.26a0.50.5 0 0 0-0.44-0.26H4.09a0.50.5 0 0 0-0.440.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
