<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.49 21.9a11 0 0 0 0-1.41L3.51 3.51A11 0 1 0 2.1 4.92l0.90.91V19c0 1.10.9 2 2 2h13.17l0.90.9c0.390.39 1.020.39 1.42 0zM8.25 19H5V7.83l2 2v3.67c0 0.550.45 1 1 1h0.25V19zm1.5 0v-4.5H10c0.46 0 0.82-0.310.94-0.73l3.31 3.31V19h-4.5zM11 8.17 5.83 3H19c1.1 0 2 0.9 2 2v13.17l-2-2V5h-2v8.5c0 0.19-0.070.36-0.160.51L13 10.17V5h-2v3.17z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
