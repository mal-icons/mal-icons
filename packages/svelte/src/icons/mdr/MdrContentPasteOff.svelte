<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.49 20.49 3.51 3.51A11 0 1 0 2.1 4.92l0.90.91V19c0 1.10.9 2 2 2h13.17l0.90.9c0.390.39 1.020.39 1.41 0 0.4-0.390.4-1.020.01-1.41zM5 19V7.83L16.17 19H5zM17 8V5h2v11.17l2 2V5c0-1.1-0.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.40.84-2.82 2H5.83l5 5H17zm-5-5c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
