<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-1 16H6c-0.55 0-1-0.45-1-1V6c0-0.550.45-1 1-1h12c0.55 0 1 0.45 1 1v12c0 0.55-0.45 1-1 1zm-4.44-6.19-2.35 3.02-1.56-1.88a0.50.5 0 0 0-0.780.01l-1.74 2.23a0.50.5 0 0 0 0.390.81h8.98a0.50.5 0 0 0 0.4-0.8l-2.55-3.39a0.50.5 0 0 0-0.79 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
