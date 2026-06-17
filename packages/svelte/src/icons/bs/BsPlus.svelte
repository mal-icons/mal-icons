<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 4a0.50.5 0 0 1 0.50.5v3h3a0.50.5 0 0 1 0 1h-3v3a0.50.5 0 0 1-1 0v-3h-3a0.50.5 0 0 1 0-1h3v-3A0.50.5 0 0 1 8 4"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
