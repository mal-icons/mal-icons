<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.2 4.79a5.94 5.94 0 0 0-4.21-1.75A5.91 5.91 0 0 0 12 4.6a5.9 5.9 0 0 0-4-1.56 5.94 5.94 0 0 0-4.21 1.76c-2.35 2.36-2.35 6.060 8.41L12 21.41l8.21-8.21c2.35-2.35 2.36-6.050-8.42z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
