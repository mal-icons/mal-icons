<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 5c0 0.550.45 1 1 1h2v12h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1h2c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2h-2c-0.55 0-1 0.45-1 1zM6 20h2c0.55 0 1-0.45 1-1s-0.45-1-1-1H6V6h2c0.55 0 1-0.45 1-1s-0.45-1-1-1H6c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
