<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6zm0.5 2.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1 0-1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
