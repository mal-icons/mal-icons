<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.09 2.91C10.080.9 7.070.49 4.65 1.67L8.28 5.3c0.390.390.39 1.02 0 1.41L6.69 8.3c-0.390.4-1.020.4-1.41 0L1.65 4.67C0.48 7.10.89 10.09 2.9 12.1a6.51 6.51 0 0 0 6.89 1.48l7.96 7.96a2.61 2.61 0 0 0 3.71 0 2.61 2.61 0 0 0 0-3.71L13.54 9.9c0.92-2.340.44-5.1-1.45-6.99z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
