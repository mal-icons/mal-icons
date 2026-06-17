<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.19 1.11a0.50.5 0 0 0-0.37 0L1.85 3.5l2.40.96L10.4 2zm3.56 1.43L5.6 5 8 5.96 14.15 3.5zm3.25 1.7-6.5 2.6v7.92l6.5-2.6V4.24zM7.5 14.76V6.84L1 4.24v7.92zM7.440.18a1.5 1.5 0 0 1 1.11 0l7.13 2.85A0.50.5 0 0 1 16 3.5v8.66a1 1 0 0 1-0.630.93l-7.18 2.87a0.50.5 0 0 1-0.37 0L0.63 13.09a1 1 0 0 1-0.63-0.93V3.5a0.50.5 0 0 1 0.31-0.46z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
