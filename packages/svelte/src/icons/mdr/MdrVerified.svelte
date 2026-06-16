<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m23 12-2.44-2.790.34-3.69-3.61-0.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l0.34 3.7L1 12l2.44 2.79-0.34 3.7 3.610.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-0.82-0.34-3.69L23 12zM9.38 16.01 7 13.61a11 0 0 1 0-1.41l0.07-0.07c0.39-0.39 1.03-0.39 1.42 0l1.61 1.62 5.15-5.16c0.39-0.39 1.03-0.39 1.42 0l0.070.07c0.390.390.39 1.02 0 1.41l-5.92 5.94c-0.410.39-1.040.39-1.44 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
