<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.09 2.21a2 2 0 0 1 2.83 0l3.88 3.88a2 2 0 0 1 0 2.83l-5.5 5.5A2 2 0 0 1 7.88 15H5.12a2 2 0 0 1-1.41-0.59l-2.5-2.5a2 2 0 0 1 0-2.83zm2.120.71a1 1 0 0 0-1.41 0L4.16 7.55l5.29 5.29 4.63-4.63a1 1 0 0 0 0-1.41zM8.75 13.55 3.45 8.25 1.91 9.79a1 1 0 0 0 0 1.41l2.5 2.5a1 1 0 0 0 0.710.29H7.88a1 1 0 0 0 0.71-0.29z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
