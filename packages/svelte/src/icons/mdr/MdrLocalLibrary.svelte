<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 11.55c-1.82-1.7-4.12-2.89-6.68-3.35C4.11 7.99 3 8.95 3 10.18v6.24c0 1.680.72 2.56 1.71 2.69 2.50.32 4.77 1.35 6.63 2.870.350.290.920.32 1.270.04 1.87-1.53 4.16-2.58 6.68-2.90.94-0.13 1.71-1.06 1.71-2.02v-6.92c0-1.23-1.11-2.19-2.32-1.98-2.560.46-4.86 1.65-6.68 3.35zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
