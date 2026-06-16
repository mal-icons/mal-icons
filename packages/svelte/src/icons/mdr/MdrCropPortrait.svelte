<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 3H7c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-1 16H8c-0.55 0-1-0.45-1-1V6c0-0.550.45-1 1-1h8c0.55 0 1 0.45 1 1v12c0 0.55-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
