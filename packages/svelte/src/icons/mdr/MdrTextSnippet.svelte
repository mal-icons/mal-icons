<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.17 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V9.83c0-0.53-0.21-1.04-0.59-1.41l-4.83-4.83c-0.37-0.38-0.88-0.59-1.41-0.59zM8 15h8c0.55 0 1 0.45 1 1s-0.45 1-1 1H8c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0-4h8c0.55 0 1 0.45 1 1s-0.45 1-1 1H8c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0-4h5c0.55 0 1 0.45 1 1s-0.45 1-1 1H8c-0.55 0-1-0.45-1-1s0.45-1 1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
