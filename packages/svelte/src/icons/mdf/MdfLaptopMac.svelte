<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 18c1.1 0 1.99-0.9 1.99-2L22 5c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2H0c0 1.10.9 2 2 2h20c1.1 0 2-0.9 2-2h-4zM4 5h16v11H4V5zm8 14c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
