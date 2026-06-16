<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.990.9-1.99 2L2 18c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm-1 12H5c-0.55 0-1-0.45-1-1V9c0-0.550.45-1 1-1h14c0.55 0 1 0.45 1 1v8c0 0.55-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
