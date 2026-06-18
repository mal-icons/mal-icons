<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m24 10.52-9.45 6.49-4.74-3.27 4.72-3.25 3.74 2.57 3.71-2.54zm-6.74 3.26-2.72-1.89-2.7 1.85 2.74 1.87zm-7.79-0.28-3.74-2.57-3.71 2.55h-2.02l9.43-6.49 4.76 3.26zm-2.74-3.25 2.74 1.87 2.7-1.87-2.74-1.87z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
