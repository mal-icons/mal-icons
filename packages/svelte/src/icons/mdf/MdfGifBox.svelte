<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM9.5 13v-1h1v1c0 0.55-0.45 1-1 1h-1c-0.55 0-1-0.45-1-1v-2c0-0.550.45-1 1-1h1c0.55 0 1 0.45 1 1h-2v2h1zm3 1h-1v-4h1v4zm4-3h-2v0.5H16v1h-1.5V14h-1v-4h3v1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
