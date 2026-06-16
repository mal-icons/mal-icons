<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-3-7H8c-0.55 0-1-0.45-1-1s0.45-1 1-1h8c0.55 0 1 0.45 1 1s-0.45 1-1 1zm-4 4H8c-0.55 0-1-0.45-1-1s0.45-1 1-1h4c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
