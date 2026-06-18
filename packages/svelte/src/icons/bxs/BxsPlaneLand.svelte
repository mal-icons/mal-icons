<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.84 15.3a1.61 1.61 0 0 0 1.89-1.19v0a1.61 1.61 0 0 0-1.18-1.95l-4.58-1.13L9.82 4.21l-2.22-0.22 2.93 6.59-4.45-0.45-2.31-3.83-1.380.31 1.24 5.52 15.21 3.17zM3 18h18v2H3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
