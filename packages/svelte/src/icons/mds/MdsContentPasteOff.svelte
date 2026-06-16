<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61 1.41-1.42zM5 19V7.83L16.17 19H5zM17 8V5h2v11.17l2 2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.40.84-2.82 2H5.83l5 5H17zm-5-5c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
