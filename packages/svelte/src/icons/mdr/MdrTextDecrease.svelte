<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.61 19c0.48 0 0.91-0.3 1.06-0.75l1.01-2.83h5.65l0.99 2.82c0.160.460.590.76 1.070.760.79 0 1.33-0.79 1.05-1.52L9.19 6.17C8.93 5.47 8.25 5 7.5 5s-1.430.47-1.69 1.17L1.56 17.48c-0.280.730.27 1.52 1.05 1.52zM7.44 7.6h0.12l2.03 5.79H5.41L7.44 7.6zM15 12c0-0.550.45-1 1-1h6c0.55 0 1 0.45 1 1s-0.45 1-1 1h-6c-0.55 0-1-0.45-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
