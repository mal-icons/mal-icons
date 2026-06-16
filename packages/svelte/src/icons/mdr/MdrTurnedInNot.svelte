<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 3H7c-1.1 0-1.990.9-1.99 2L5 21l7-3 7 3V5c0-1.1-0.9-2-2-2zm0 15-5-2.18L7 18V6c0-0.550.45-1 1-1h8c0.55 0 1 0.45 1 1v12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
