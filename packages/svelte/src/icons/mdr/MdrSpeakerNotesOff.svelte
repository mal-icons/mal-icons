<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.91 2.36c-0.35-0.35-0.92-0.35-1.27 0s-0.350.92 0 1.27l1.38 1.38L2 22l4-4h9l5.09 5.09c0.350.350.920.35 1.27 0s0.35-0.92 0-1.27L1.91 2.36zM7 14c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm0-3c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm13-9H4.08l7 7H17c0.55 0 1 0.45 1 1s-0.45 1-1 1h-3.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-0.9-2-2-2zm-3 6h-6c-0.55 0-1-0.45-1-1s0.45-1 1-1h6c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
