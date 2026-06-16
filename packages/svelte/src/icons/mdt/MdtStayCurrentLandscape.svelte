<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 7h14v10H5z","opacity":".3"}],["path",{"d":"M21 5H3c-1.1 0-1.990.9-1.99 2L1 17c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2zm-2 12H5V7h14v10z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
