<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-1.990.9-1.99 2L2 22l4-4h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-3.62 10.7L14 10.8V13c0 0.55-0.45 1-1 1H7c-0.55 0-1-0.45-1-1V7c0-0.550.45-1 1-1h6c0.55 0 1 0.45 1 1v2.2l2.38-1.9a11 0 0 1 1.620.78v3.84c0 0.84-0.97 1.3-1.620.78z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
