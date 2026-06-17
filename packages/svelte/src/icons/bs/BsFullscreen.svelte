<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.5 1a0.50.5 0 0 0-0.50.5v4a0.50.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a0.50.5 0 0 1 0 1zM10 0.5a0.50.5 0 0 1 0.5-0.5h4A1.5 1.5 0 0 1 16 1.5v4a0.50.5 0 0 1-1 0v-4a0.50.5 0 0 0-0.5-0.5h-4a0.50.5 0 0 1-0.5-0.5M0.5 10a0.50.5 0 0 1 0.50.5v4a0.50.5 0 0 0 0.50.5h4a0.50.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a0.50.5 0 0 1 0.5-0.5m15 0a0.50.5 0 0 1 0.50.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a0.50.5 0 0 1 0-1h4a0.50.5 0 0 0 0.5-0.5v-4a0.50.5 0 0 1 0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
