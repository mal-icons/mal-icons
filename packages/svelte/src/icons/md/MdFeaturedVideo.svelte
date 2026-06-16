<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3H3c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 16H3V5h18v14zM4 6h9v7H4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
