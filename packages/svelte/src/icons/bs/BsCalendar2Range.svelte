<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.5 0a0.50.5 0 0 1 0.50.5V1h8V0.5a0.50.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V0.5a0.50.5 0 0 1 0.5-0.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"}],["path",{"d":"M2.5 4a0.50.5 0 0 1 0.5-0.5h10a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5H3a0.50.5 0 0 1-0.5-0.5zM9 8a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1m-8 2h4a1 1 0 1 1 0 2H1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
