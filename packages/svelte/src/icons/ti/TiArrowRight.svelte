<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.29 7.29c-0.390.39-0.39 1.02 0 1.41l2.29 2.29h-7.59c-0.55 0-1 0.45-1 1s0.45 1 1 1h7.59l-2.29 2.29c-0.390.39-0.39 1.02 0 1.410.20.20.450.290.710.29s0.51-0.10.71-0.29l4.71-4.71-4.71-4.71c-0.39-0.39-1.02-0.39-1.41 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
