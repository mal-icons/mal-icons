<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.01 13.28A4.99 4.99 0 0 1 7.08 8.1l-0.790.78a11 0 1 0 1.41 1.41l2.59-2.59a11 0 0 0 0-1.41L7.71 3.7A11 0 1 0 6.3 5.11l0.880.88v0.06a7 7 0 0 0-6.15 7.47C1.29 17.22 4.55 20 8.26 20H10c0.55 0 1-0.45 1-1s-0.45-1-1-1H8.22c-2.7 0-5.07-2.04-5.21-4.72zM13 15v3c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-3c0-1.1-0.9-2-2-2h-5c-1.1 0-2 0.9-2 2zm7 3h-5v-3h5v3zm0-14h-5c-1.1 0-2 0.9-2 2v3c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
