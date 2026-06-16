<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.79 13H13V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v9H9.21c-0.45 0-0.670.54-0.350.85l2.79 2.79c0.20.20.510.20.71 0l2.79-2.79a0.50.5 0 0 0-0.36-0.85zM4 20c0 0.550.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1 0.45-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
