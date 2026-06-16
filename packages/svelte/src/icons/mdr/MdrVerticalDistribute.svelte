<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 3c0 0.55-0.45 1-1 1H3c-0.55 0-1-0.45-1-1s0.45-1 1-1h18c0.55 0 1 0.45 1 1zM7 12c0 0.830.67 1.5 1.5 1.5h7c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5h-7c-0.83 0-1.50.67-1.5 1.5zm-5 9c0 0.550.45 1 1 1h18c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
