<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 5c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5zM5 19V5h14l0 14H5z"}],["path",{"d":"M7 7h2v2H7zm4 0h6v2h-6zm-4 4h2v2H7zm4 0h6v2h-6zm-4 4h2v2H7zm4 0h6v2h-6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
