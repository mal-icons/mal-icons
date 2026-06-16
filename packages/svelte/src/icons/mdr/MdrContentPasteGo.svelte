<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 5h2v1c0 1.10.9 2 2 2h6c1.1 0 2-0.9 2-2V5h2v6h2V5c0-1.1-0.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.40.84-2.82 2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h5v-2H5V5zm7-2c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1z"}],["path",{"d":"m21.29 16.29-2.58-2.58a11 0 1 0-1.41 1.41l0.870.88H13c-0.55 0-1 0.45-1 1s0.45 1 1 1h5.17l-0.870.88a11 0 1 0 1.41 1.41l2.58-2.58c0.39-0.40.39-1.03 0-1.42z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
