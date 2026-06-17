<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 4.5a0.50.5 0 0 1 1 0v7a0.50.5 0 0 1-1 0zm2 0a0.50.5 0 0 1 1 0v7a0.50.5 0 0 1-1 0zm2 0a0.50.5 0 0 1 1 0v7a0.50.5 0 0 1-1 0zm2 0a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v7a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm3 0a0.50.5 0 0 1 1 0v7a0.50.5 0 0 1-1 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
