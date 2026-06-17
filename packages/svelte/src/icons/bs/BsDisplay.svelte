<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 0.25 1.5H11a0.50.5 0 0 1 0 1H5a0.50.5 0 0 1 0-1h0.75Q6 13 6 12H2s-2 0-2-2zm1.4-0.85a0.760.76 0 0 0-0.250.3A1.5 1.5 0 0 0 1 4.01V10c0 0.330.080.50.140.6q0.110.160.30.25a1.5 1.5 0 0 0 0.540.14L2.01 11H14c0.33 0 0.5-0.080.6-0.14a0.760.76 0 0 0 0.25-0.3 1.5 1.5 0 0 0 0.14-0.54L15 9.99V4c0-0.32-0.08-0.5-0.14-0.6a0.760.76 0 0 0-0.3-0.25A1.5 1.5 0 0 0 13.99 3H2c-0.32 0-0.50.08-0.60.14"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
