<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.9 3.55A1 1 0 0 0 17 3H7c-0.38 0-0.720.21-0.890.55l-4 8a1 1 0 0 0 0 0.9l4 8c0.170.340.520.550.90.55h10c0.38 0 0.73-0.210.9-0.55l4-8a1 1 0 0 0 0-0.89l-4-8zM19.38 11h-7.76l-3-6h7.76l3 6zM4.12 12 7 6.24 9.88 12 7 17.76 4.12 12zm12.26 7H8.62l3-6h7.76l-3 6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
