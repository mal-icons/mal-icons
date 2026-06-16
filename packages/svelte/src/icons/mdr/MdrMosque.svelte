<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 8h10c0.29 0 0.570.060.840.130.09-0.330.16-0.670.16-1.04 0-1.31-0.65-2.53-1.74-3.25L12 1 7.74 3.84A3.89 3.89 0 0 0 6 7.09c0 0.370.070.710.16 1.040.27-0.070.55-0.130.84-0.13z"}],["path",{"d":"M24 7c0-1.1-2-3-2-3s-2 1.9-2 3c0 0.740.4 1.38 1 1.72V13h-2v-2c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2v2H3V8.72c0.6-0.34 1-0.98 1-1.72 0-1.1-2-3-2-3S0 5.9 0 7c0 0.740.4 1.38 1 1.72V21h9v-4c0-1.10.9-2 2-2s2 0.9 2 2v4h9V8.72c0.6-0.34 1-0.98 1-1.72z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
