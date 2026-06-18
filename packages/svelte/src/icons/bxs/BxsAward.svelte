<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 9a6.99 6.99 0 0 0 2.88 5.65l00a6.97 6.97 0 0 0 1.880.98l0.050.02a6.91 6.91 0 0 0 1.160.27 6.79 6.79 0 0 0 1.020.09H12c0.35 0 0.69-0.03 1.03-0.08l0.18-0.03c0.34-0.060.66-0.140.98-0.24l0.04-0.02C17 14.69 19 12.08 19 9 19 5.14 15.86 2 12 2S5 5.14 5 9zM12 4c2.76 0 5 2.24 5 5h-2A3 3 0 0 0 12 6V4zM7.52 16.8V22L12 20.5l4.48 1.50-5.2a8.93 8.93 0 0 1-8.96 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
