<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 19h-1V5c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2v14H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h16c0.55 0 1-0.45 1-1s-0.45-1-1-1zm-6-6c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
