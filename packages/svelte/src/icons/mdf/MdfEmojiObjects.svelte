<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3c-0.46 0-0.930.04-1.40.14-2.760.53-4.96 2.76-5.48 5.52-0.48 2.610.48 5.01 2.22 6.560.430.380.660.910.66 1.47V19c0 1.10.9 2 2 2h0.28a1.98 1.98 0 0 0 3.44 0H14c1.1 0 2-0.9 2-2v-2.31c0-0.550.22-1.090.64-1.46A6.96 6.96 0 0 0 19 10c0-3.87-3.13-7-7-7zm2 16h-4v-1h4v1zm0-2h-4v-1h4v1zm-1.5-5.59V14h-1v-2.59L9.67 9.59l0.71-0.71L12 10.5l1.62-1.620.710.71-1.83 1.82z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
