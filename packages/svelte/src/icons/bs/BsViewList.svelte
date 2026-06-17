<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a0.50.5 0 0 1 0.5-0.5h13a0.50.5 0 0 1 0 1h-13A0.50.5 0 0 1 1 2m0 12a0.50.5 0 0 1 0.5-0.5h13a0.50.5 0 0 1 0 1h-13A0.50.5 0 0 1 1 14"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
