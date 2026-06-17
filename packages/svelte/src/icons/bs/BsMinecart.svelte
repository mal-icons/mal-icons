<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4M0.12 3.18A0.50.5 0 0 1 0.5 3h15a0.50.5 0 0 1 0.490.59l-1.5 8A0.50.5 0 0 1 14 12H2a0.50.5 0 0 1-0.49-0.41l-1.5-8a0.50.5 0 0 1 0.11-0.41zm0.990.82 1.31 7h11.17l1.31-7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
