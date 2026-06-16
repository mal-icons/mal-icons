<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 8c0 0.550.45 1 1 1h4v2H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h3v2H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h4c1.1 0 2-0.9 2-2v-1.5c0-0.83-0.67-1.5-1.5-1.50.83 0 1.5-0.67 1.5-1.5V9c0-1.1-0.9-2-2-2H4c-0.55 0-1 0.45-1 1zm18 4v3c0 1.1-0.9 2-2 2h-5c-1.1 0-2-0.9-2-2V9c0-1.10.9-2 2-2h6c0.55 0 1 0.45 1 1s-0.45 1-1 1h-6v6h5v-2h-1.5c-0.55 0-1-0.45-1-1s0.45-1 1-1H20c0.55 0 1 0.45 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
