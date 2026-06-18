<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M24 8.77h-2.47v7.57h-1.42V8.77h-2.46V7.53H24zm-6.85 7.57h-4.82V7.53h4.63v1.24h-3.2v2.49h2.95v1.23h-2.95v2.6h3.4zm-6.71 0H8.88L4.78 9.86a2.9 2.9 0 0 1-0.26-0.51h-0.04c0.030.190.050.590.05 1.21v5.77H3.16V7.53h1.66l3.97 6.32c0.170.260.280.440.320.54h0.02c-0.04-0.23-0.06-0.63-0.06-1.18V7.53h1.37zm-8.7-0.69a0.870.83 0 0 1-0.870.830.870.83 0 0 1-0.87-0.830.870.83 0 0 1 0.87-0.830.870.83 0 0 1 0.870.83Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
