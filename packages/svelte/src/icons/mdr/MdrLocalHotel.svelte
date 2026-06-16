<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-6c-1.1 0-2 0.9-2 2v5H3V6c0-0.55-0.45-1-1-1s-1 0.45-1 1v13c0 0.550.45 1 1 1s1-0.45 1-1v-2h18v2c0 0.550.45 1 1 1s1-0.45 1-1v-8c0-2.21-1.79-4-4-4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
