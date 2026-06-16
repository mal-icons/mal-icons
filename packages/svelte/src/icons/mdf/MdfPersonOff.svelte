<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.65 5.82a4 4 0 1 1 5.53 5.53L8.65 5.82zM20 17.17c-0.02-1.1-0.63-2.11-1.61-2.62-0.54-0.28-1.13-0.54-1.77-0.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.810.23-3.390.79-4.67 1.45A2.97 2.97 0 0 0 4 17.22V20h13.17l2.61 2.61 1.41-1.42z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
