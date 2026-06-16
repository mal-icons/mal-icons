<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 21c0.55 0 1-0.45 1-1V6.83l0.880.88a11 0 1 0 1.41-1.41L12.7 3.71a11 0 0 0-1.41 0L8.71 6.29a11 0 1 0 1.41 1.41l0.88-0.87V9c0 3.62-2.89 6.22-4.97 7.62a0.990.99 0 0 0-0.14 1.53c0.330.330.870.4 1.260.13C8.74 17.22 10.04 16 11 14.69v5.3c0 0.560.45 1.01 1 1.01z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
