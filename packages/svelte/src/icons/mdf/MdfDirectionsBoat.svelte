<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 21c-1.39 0-2.78-0.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-0.35 4-0.99a8.75 8.75 0 0 0 8 0c1.260.65 2.620.99 4 0.99h2v-2h-2zM3.95 19H4c1.6 0 3.02-0.88 4-2 0.98 1.12 2.4 2 4 2s3.02-0.88 4-2c0.98 1.12 2.4 2 4 2h0.05l1.89-6.68c0.08-0.260.06-0.54-0.06-0.78s-0.34-0.42-0.6-0.5L20 10.62V6c0-1.1-0.9-2-2-2h-3V1H9v3H6c-1.1 0-2 0.9-2 2v4.62l-1.290.42a1.01 1.01 0 0 0-0.66 1.28L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
