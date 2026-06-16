<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 24H4c-1.1 0-2-0.9-2-2s0.9-2 2-2h16c1.1 0 2 0.9 2 2s-0.9 2-2 2zM13.06 5.19l3.75 3.75-8.77 8.77c-0.180.19-0.440.29-0.70.29H5c-0.55 0-1-0.45-1-1v-2.34c0-0.270.11-0.520.29-0.71l8.77-8.76zm4.82 2.68-3.75-3.75 1.83-1.83a11 0 0 1 1.41 0l2.34 2.34c0.390.390.39 1.02 0 1.41l-1.83 1.83z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
