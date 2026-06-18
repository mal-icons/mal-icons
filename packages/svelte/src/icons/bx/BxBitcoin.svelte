<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 13v4H6v2h3v2h2v-2h2v2h2v-2.05c1.97-0.25 3.5-1.91 3.5-3.95 0-1.32-0.65-2.48-1.64-3.21A3.98 3.98 0 0 0 18 9c0-1.86-1.28-3.41-3-3.86V3h-2v2h-2V3H9v2H6v2h2v6zm6.5 4H10v-4h4.5c1.1 0 2 0.9 2 2s-0.9 2-2 2zM10 7h4c1.1 0 2 0.9 2 2s-0.9 2-2 2h-4V7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
