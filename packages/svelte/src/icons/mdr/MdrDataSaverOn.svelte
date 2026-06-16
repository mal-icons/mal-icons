<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 11H9c-0.55 0-1 0.45-1 1s0.45 1 1 1h2v2c0 0.550.45 1 1 1s1-0.45 1-1v-2h2c0.55 0 1-0.45 1-1s-0.45-1-1-1h-2V9c0-0.55-0.45-1-1-1s-1 0.45-1 1v2zm1 8c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.060.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0 1 12 19zm1-16.95v3.03c3.390.49 6 3.39 6 6.92 0 0.9-0.18 1.75-0.48 2.54l2.6 1.53c0.56-1.240.88-2.620.88-4.07 0-5.18-3.95-9.45-9-9.95z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
