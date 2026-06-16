<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.59 3.59c-0.38-0.38-0.89-0.59-1.42-0.59H5a2 2 0 0 0-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V7.83c0-0.53-0.21-1.04-0.59-1.41l-2.82-2.83zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm1-10H7c-1.1 0-2-0.9-2-2s0.9-2 2-2h6c1.1 0 2 0.9 2 2s-0.9 2-2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
