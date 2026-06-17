<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M3.5 5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1 0-1M5 8.5a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0 1h-5a0.50.5 0 0 1-0.5-0.5m2 3a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0 1h-1a0.50.5 0 0 1-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
