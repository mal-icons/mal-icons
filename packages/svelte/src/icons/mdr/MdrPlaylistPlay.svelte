<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 10h10c0.55 0 1 0.45 1 1s-0.45 1-1 1H5c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0-4h10c0.55 0 1 0.45 1 1s-0.45 1-1 1H5c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0 8h6c0.55 0 1 0.45 1 1s-0.45 1-1 1H5c-0.55 0-1-0.45-1-1s0.45-1 1-1zm9 0.88v4.23c0 0.390.420.630.760.43l3.53-2.12c0.32-0.190.32-0.66 0-0.86l-3.53-2.12a0.510.51 0 0 0-0.760.44z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
