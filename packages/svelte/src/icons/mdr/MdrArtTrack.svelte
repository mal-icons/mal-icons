<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 13h-6c-0.55 0-1-0.45-1-1s0.45-1 1-1h6c0.55 0 1 0.45 1 1s-0.45 1-1 1zm0-6h-6c-0.55 0-1 0.45-1 1s0.45 1 1 1h6c0.55 0 1-0.45 1-1s-0.45-1-1-1zm-6 10h6c0.55 0 1-0.45 1-1s-0.45-1-1-1h-6c-0.55 0-1 0.45-1 1s0.45 1 1 1zm-3-8v6c0 1.1-0.9 2-2 2H4c-1.1 0-2-0.9-2-2V9c0-1.10.9-2 2-2h6c1.1 0 2 0.9 2 2zm-2.1 5.2-1.26-1.68a0.510.51 0 0 0-0.8-0.01L6.5 14.26l-0.85-1.03a0.50.5 0 0 0-0.780.01l-0.740.95a0.50.5 0 0 0 0.390.81H9.5a0.50.5 0 0 0 0.4-0.8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
