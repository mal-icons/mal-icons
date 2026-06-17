<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.5 5a0.50.5 0 1 0-1 0h-2A1.5 1.5 0 0 0 4 6.5v2A1.5 1.5 0 0 0 5.5 10h0.47l-0.45 1.34a0.50.5 0 1 0 0.950.32L7.03 10H7.5v1a0.50.5 0 0 0 1 0v-1h0.47l0.55 1.66a0.50.5 0 1 0 0.95-0.32L10.03 10h0.47A1.5 1.5 0 0 0 12 8.5v-2A1.5 1.5 0 0 0 10.5 5zM5 6.5a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0.50.5v2a0.50.5 0 0 1-0.50.5h-5a0.50.5 0 0 1-0.5-0.5z"}],["path",{"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
