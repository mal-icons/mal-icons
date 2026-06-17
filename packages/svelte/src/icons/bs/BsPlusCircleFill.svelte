<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a0.50.5 0 0 0-1 0v3h-3a0.50.5 0 0 0 0 1h3v3a0.50.5 0 0 0 1 0v-3h3a0.50.5 0 0 0 0-1h-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
