<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.83 18H21v-4h2v-4H12.83l8 8zm-1.05 4.61 1.41-1.41L2.81 2.81 1.39 4.22l2.59 2.59A6.01 6.01 0 0 0 1 12c0 3.31 2.69 6 6 6 2.21 0 4.15-1.2 5.18-2.99l7.6 7.6zM8.99 11.82c0.010.060.010.120.010.18 0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2c0.06 0 0.12 0 0.180.01l1.81 1.81z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
