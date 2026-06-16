<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 12c0 0.550.45 1 1 1h1v2H9V9h6c0.55 0 1-0.45 1-1s-0.45-1-1-1H9c-1.1 0-2 0.9-2 2v6c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-3c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
