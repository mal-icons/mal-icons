<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.48 11.95c0.170.020.340.050.520.05 2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4c0 0.180.030.350.050.52l3.43 3.43zm2.21 2.21L22.53 20H23v-2c0-2.14-3.56-3.5-6.31-3.84zM0 3.12l4 4V10H1v2h3v3h2v-3h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v2h9.88l4 4 1.41-1.41L1.41 1.71 0 3.12zM6.88 10H6v-0.88l0.880.88z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
