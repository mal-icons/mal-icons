<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 19c0-0.55-0.45-1-1-1H4v-6h18V6c0-1.1-0.9-2-2-2H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h9c0.55 0 1-0.45 1-1zm6-11H4V6h16v2zm0 14c-0.55 0-1-0.45-1-1v-2h-2c-0.55 0-1-0.45-1-1s0.45-1 1-1h2v-2c0-0.550.45-1 1-1s1 0.45 1 1v2h2c0.55 0 1 0.45 1 1s-0.45 1-1 1h-2v2c0 0.55-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
