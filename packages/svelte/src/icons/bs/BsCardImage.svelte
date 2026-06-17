<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"}],["path",{"d":"M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a0.50.5 0 0 1 0.50.5v6l-3.77-1.95a0.50.5 0 0 0-0.580.09l-3.71 3.71-2.66-1.77a0.50.5 0 0 0-0.630.06L1 12v0.54L1 12.5v-9a0.50.5 0 0 1 0.5-0.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
