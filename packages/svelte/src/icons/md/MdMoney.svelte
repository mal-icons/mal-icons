<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 16h3c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1zm1-6h1v4h-1v-4zm-7 6h3c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1H9c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1zm1-6h1v4h-1v-4zM5 8h2v8H5zM2 4v16h20V4H2zm18 14H4V6h16v12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
