<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 6V4H7.39l2 2zm2 13V9c0-0.55-0.45-1-1-1h-6c-0.55 0-1 0.45-1 1v3.61l2 2V10h4v7h-1.61l2.93 2.93c0.39-0.130.68-0.490.68-0.93zM2.06 1.510.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.41-1.41L2.06 1.51zM4 17V6.27L14.73 17H4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
