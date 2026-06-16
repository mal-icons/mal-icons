<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 9.3V5c0-0.55-0.45-1-1-1h-1c-0.55 0-1 0.45-1 1v1.6l-3.33-3c-0.38-0.34-0.96-0.34-1.34 0l-8.36 7.53c-0.340.3-0.130.870.330.87H5v7c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-5h4v5c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-7h1.7c0.46 0 0.68-0.570.33-0.87L19 9.3zm-9 0.7c0-1.10.9-2 2-2s2 0.9 2 2h-4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
