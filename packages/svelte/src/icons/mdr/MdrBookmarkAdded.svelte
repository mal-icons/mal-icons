<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 5c0-1.10.9-2 2-2h7a5 5 0 0 0 5 7.9v8.58c0 0.72-0.73 1.2-1.390.92L12 18l-5.61 2.4A0.990.99 0 0 1 5 19.48V5zm17.07-1.66c0.390.390.39 1.02 0 1.41l-3.54 3.54a11 0 0 1-1.41 0l-1.41-1.41a11 0 1 1 1.41-1.41l0.710.71 2.83-2.83c0.39-0.4 1.02-0.4 1.41-0.01z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
