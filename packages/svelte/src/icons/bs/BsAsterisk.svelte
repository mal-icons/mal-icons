<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 0a1 1 0 0 1 1 1v5.27l4.56-2.63a1 1 0 1 1 1 1.73L10 8l4.56 2.63a1 1 0 1 1-1 1.73L9 9.73V15a1 1 0 1 1-2 0V9.73l-4.56 2.63a1 1 0 1 1-1-1.73L6 8 1.44 5.37a1 1 0 0 1 1-1.73L7 6.27V1a1 1 0 0 1 1-1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
