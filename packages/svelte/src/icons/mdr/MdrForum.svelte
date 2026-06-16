<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 6h-1v8c0 0.55-0.45 1-1 1H6v1c0 1.10.9 2 2 2h10l4 4V8c0-1.1-0.9-2-2-2zm-3 5V4c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v13l4-4h9c1.1 0 2-0.9 2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
