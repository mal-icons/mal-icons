<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.50.5A0.50.5 0 0 1 4 1v13h13a0.50.5 0 0 1 0 1h-2v2a0.50.5 0 0 1-1 0v-2H3.5a0.50.5 0 0 1-0.5-0.5V4H1a0.50.5 0 0 1 0-1h2V1a0.50.5 0 0 1 0.5-0.5m2.5 3a0.50.5 0 0 1 0.5-0.5h8a0.50.5 0 0 1 0.50.5v8a0.50.5 0 0 1-1 0V4H6.5a0.50.5 0 0 1-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
