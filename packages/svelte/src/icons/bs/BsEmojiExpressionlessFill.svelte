<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.5 6h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1m5 0h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1m-5 4h7a0.50.5 0 0 1 0 1h-7a0.50.5 0 0 1 0-1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
