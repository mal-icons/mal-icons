<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.27 10c0.34 0 0.68-0.160.84-0.470.17-0.310.51-0.530.89-0.53h4c0.55 0 1 0.45 1 1v1H6c-2.21 0-4 1.79-4 4v2c0 0.550.45 1 1 1h13c0.55 0 1-0.45 1-1v-1c1.66 0 3-1.34 3-3V9c0-0.550.45-1 1-1s1-0.45 1-1-0.45-1-1-1c-1.66 0-3 1.34-3 3v4c0 0.55-0.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.13 0-2.110.62-2.63 1.55-0.360.650.16 1.450.9 1.45z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
