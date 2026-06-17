<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 0.72c-2.070.95-4.54 1.48-7 1.66v6.24a25 25 0 0 1 1.090.09c2.050.2 4.040.67 5.91 1.56zm-8 7.84V4.93c-0.680.03-1.40.04-2.010.05A2.02 2.02 0 0 0 0 7v2c0 1.110.9 2 1.99 2.01l0.50.01a64 64 0 0 1 1.510.05m1.39 1.08q0.430.030.850.08l0.25 1.69a1 1 0 0 1-0.98 1.19h-0.55a1 1 0 0 1-0.92-0.6l-1.31-2.48a66 66 0 0 1 1.690.06q0.490.030.970.06"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
