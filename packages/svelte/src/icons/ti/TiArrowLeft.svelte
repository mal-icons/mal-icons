<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 11h-7.59l2.29-2.29c0.39-0.390.39-1.02 0-1.41s-1.02-0.39-1.41 0l-4.71 4.71 4.71 4.71c0.20.20.450.290.710.29s0.51-0.10.71-0.29c0.39-0.390.39-1.02 0-1.41l-2.29-2.29h7.59c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
