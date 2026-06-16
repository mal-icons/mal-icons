<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 19V5c0-1.1-0.9-2-2-2H6c-1.1 0-2 0.9-2 2v14H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h18c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1zM11 5h2v14h-2V5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
