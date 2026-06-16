<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 8.69V4h-4.69L12 0.69 8.69 4H4v4.69L0.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12.29 7c-0.74 0-1.450.17-2.080.46 1.720.79 2.92 2.53 2.92 4.54s-1.2 3.75-2.92 4.54c0.630.29 1.340.46 2.080.46 2.76 0 5-2.24 5-5s-2.24-5-5-5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
