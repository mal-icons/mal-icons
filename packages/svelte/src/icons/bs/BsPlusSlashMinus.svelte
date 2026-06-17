<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m1.85 14.85 13-13a0.50.5 0 0 0-0.71-0.71l-13 13a0.50.5 0 0 0 0.710.71M4 1a0.50.5 0 0 1 0.50.5v2h2a0.50.5 0 0 1 0 1h-2v2a0.50.5 0 0 1-1 0v-2h-2a0.50.5 0 0 1 0-1h2v-2A0.50.5 0 0 1 4 1m5 11a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0 1h-5A0.50.5 0 0 1 9 12"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
