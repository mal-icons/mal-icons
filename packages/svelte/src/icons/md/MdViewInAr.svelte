<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 4c0-0.550.45-1 1-1h2V1H4C2.34 1 1 2.34 1 4v2h2V4zm0 16v-2H1v2c0 1.66 1.34 3 3 3h2v-2H4c-0.55 0-1-0.45-1-1zM20 1h-2v2h2c0.55 0 1 0.45 1 1v2h2V4c0-1.66-1.34-3-3-3zm1 19c0 0.55-0.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2h-2v2zm-2-5.13V9.13c0-0.72-0.38-1.38-1-1.73l-5-2.88c-0.31-0.18-0.65-0.27-1-0.27s-0.690.09-1 0.27L6 7.39c-0.620.36-1 1.02-1 1.74v5.74c0 0.720.38 1.38 1 1.73l5 2.88c0.310.180.650.27 1 0.27s0.69-0.09 1-0.27l5-2.88c0.62-0.35 1-1.01 1-1.73zm-8 2.3-4-2.3v-4.63l4 2.33v4.6zm1-6.33L8.04 8.53 12 6.25l3.96 2.28L12 10.84zm5 4.03-4 2.3v-4.6l4-2.33v4.63z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
