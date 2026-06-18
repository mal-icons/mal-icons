<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 3v18h24V3zm13.21 1.66c-1.430.55-2.8 1.76-3.9 4.18-0.320.7-0.92 2.06-1.2 2.67-2.22 4.88-3.36 5.93-6.72 5.93V4.35H13.15c0.18-0.010.240.250.060.31zm9.43 1.89V19.65H10.85c-0.180.01-0.23-0.25-0.05-0.31 1.43-0.55 2.8-1.76 3.9-4.180.32-0.70.93-2.06 1.2-2.67 2.22-4.88 3.36-5.93 6.72-5.93z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
