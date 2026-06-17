<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.5 3a0.50.5 0 0 1 0.50.5v9a0.50.5 0 0 1-0.50.5h-13a0.50.5 0 0 1-0.5-0.5v-9a0.50.5 0 0 1 0.5-0.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"}],["path",{"d":"M3 8.5a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5m0 2a0.50.5 0 0 1 0.5-0.5h6a0.50.5 0 0 1 0 1h-6a0.50.5 0 0 1-0.5-0.5m0-5a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-9a0.50.5 0 0 1-0.5-0.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
