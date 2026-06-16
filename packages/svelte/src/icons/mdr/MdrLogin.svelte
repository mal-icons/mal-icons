<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.3 7.7a0.980.98 0 0 0 0 1.4l1.9 1.9H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h9.2l-1.9 1.9a0.980.98 0 0 0 0 1.4c0.390.39 1.010.39 1.4 0l3.59-3.59a11 0 0 0 0-1.41L11.7 7.7a0.980.98 0 0 0-1.4 0zM20 19h-7c-0.55 0-1 0.45-1 1s0.45 1 1 1h7c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2h-7c-0.55 0-1 0.45-1 1s0.45 1 1 1h7v14z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
