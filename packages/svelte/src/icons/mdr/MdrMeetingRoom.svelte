<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 19h-1V5c0-0.55-0.45-1-1-1h-4c0-0.55-0.45-1-1-1H6c-0.55 0-1 0.45-1 1v15H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h9c0.55 0 1-0.45 1-1V6h3v14c0 0.550.45 1 1 1h2c0.55 0 1-0.45 1-1s-0.45-1-1-1zm-9-6c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
