<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 19c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v10zm5.65-8.65c0.2-0.20.51-0.20.71 0L16 14h-2v4h-4v-4H8l3.65-3.65zM15.5 4l-0.71-0.71c-0.18-0.18-0.44-0.29-0.7-0.29H9.91c-0.26 0-0.520.11-0.70.29L8.5 4H6c-0.55 0-1 0.45-1 1s0.45 1 1 1h12c0.55 0 1-0.45 1-1s-0.45-1-1-1h-2.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
