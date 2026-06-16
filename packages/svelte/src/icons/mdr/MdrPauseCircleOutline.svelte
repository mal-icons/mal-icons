<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 16c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1s-1 0.45-1 1v6c0 0.550.45 1 1 1zm2-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-4c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1s-1 0.45-1 1v6c0 0.550.45 1 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
