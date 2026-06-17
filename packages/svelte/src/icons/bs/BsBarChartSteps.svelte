<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0.5 0a0.50.5 0 0 1 0.50.5v15a0.50.5 0 0 1-1 0V0.5A0.50.5 0 0 1 0.5 0M2 1.5a0.50.5 0 0 1 0.5-0.5h4a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-4a0.50.5 0 0 1-0.5-0.5zm2 4a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-7a0.50.5 0 0 1-0.5-0.5zm2 4a0.50.5 0 0 1 0.5-0.5h6a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-6a0.50.5 0 0 1-0.5-0.5zm2 4a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-7a0.50.5 0 0 1-0.5-0.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
