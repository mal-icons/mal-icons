<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a0.50.5 0 0 1 0.5-0.5h4a0.50.5 0 0 1 0 1h-4a0.50.5 0 0 1-0.5-0.5m0.5 2.5a0.50.5 0 0 0 0 1h4a0.50.5 0 0 0 0-1zm2 3a0.50.5 0 0 0 0 1h2a0.50.5 0 0 0 0-1zm0 3a0.50.5 0 0 0 0 1h2a0.50.5 0 0 0 0-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
