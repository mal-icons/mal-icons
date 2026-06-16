<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"10","cy":"8","r":"4"}],["path",{"d":"M10.35 14.01C7.62 13.91 2 15.27 2 18v1c0 0.550.45 1 1 1h8.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c0.47-0.80.7-1.770.48-2.82-0.34-1.64-1.72-2.95-3.38-3.16-2.63-0.34-4.85 1.87-4.5 4.50.22 1.66 1.52 3.04 3.16 3.38 1.050.22 2.02-0.01 2.82-0.48l1.86 1.86a11 0 1 0 1.41-1.41l-1.85-1.87zM16 18c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
