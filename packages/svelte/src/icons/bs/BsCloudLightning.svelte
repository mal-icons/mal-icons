<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.41 4.03a5 5 0 0 0-9.5-1A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 0.41-5.97M8.5 1a4 4 0 0 1 3.98 3.560.50.5 0 0 0 0.50.45H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 0.61-4.930.50.5 0 0 0 0.6-0.33A4 4 0 0 1 8.5 1M7.05 11.28A0.50.5 0 0 1 7.5 11h1a0.50.5 0 0 1 0.470.66l-0.280.84H9.5a0.50.5 0 0 1 0.390.81l-2 2.5a0.50.5 0 0 1-0.87-0.43L7.36 14H6.5a0.50.5 0 0 1-0.45-0.72z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
