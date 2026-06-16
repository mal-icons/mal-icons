<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 3H5c-1.1 0-1.990.9-1.99 2L3 19c0 1.10.89 2 1.99 2H19c1.1 0 2-0.9 2-2V9l-6-6zM5 19V5h9v5h5v9H5zM9 8c0 0.55-0.45 1-1 1s-1-0.45-1-1 0.45-1 1-1 1 0.45 1 1zm0 4c0 0.55-0.45 1-1 1s-1-0.45-1-1 0.45-1 1-1 1 0.45 1 1zm0 4c0 0.55-0.45 1-1 1s-1-0.45-1-1 0.45-1 1-1 1 0.45 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
