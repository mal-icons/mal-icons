<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 1H3c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zM4.3 4.7a11 0 0 1 1.41 0l4.47 4.47-1.42 1.4L4.3 6.11a11 0 0 1 0-1.41zm15.29 14.8c0 0.28-0.220.5-0.50.5H15.3a0.50.5 0 0 1-0.36-0.85l1.2-1.2-3.13-3.13 1.41-1.41 3.13 3.14 1.19-1.19c0.31-0.320.85-0.10.850.35v3.79zm0-11.21a0.50.5 0 0 1-0.850.36l-1.19-1.19L5.7 19.29a11 0 1 1-1.41-1.41L16.13 6.04l-1.19-1.19A0.50.5 0 0 1 15.3 4h3.79c0.28 0 0.50.220.50.5v3.79z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
