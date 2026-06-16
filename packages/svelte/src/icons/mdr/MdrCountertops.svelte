<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 10V7.17c0-1.62-1.22-3.08-2.84-3.17-1.21-0.06-2.270.59-2.8 1.57-0.350.650.17 1.430.91 1.43h0.01c0.34 0 0.68-0.160.84-0.460.16-0.320.5-0.540.88-0.540.55 0 1 0.45 1 1v3H8c1.1 0 2-0.9 2-2V5c0-0.55-0.45-1-1-1H5c-0.55 0-1 0.45-1 1v3c0 1.10.9 2 2 2H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v7c0 0.550.45 1 1 1h14c0.55 0 1-0.45 1-1v-7h1c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3zm-5 8h-2v-6h2v6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
