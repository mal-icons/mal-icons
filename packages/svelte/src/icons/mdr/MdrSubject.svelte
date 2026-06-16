<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 17H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h8c0.55 0 1-0.45 1-1s-0.45-1-1-1zm6-8H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1zM5 15h14c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1 0.45-1 1s0.45 1 1 1zM4 6c0 0.550.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1 0.45-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
