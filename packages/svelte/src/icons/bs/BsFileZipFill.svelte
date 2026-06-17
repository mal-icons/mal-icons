<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.5 9.44V8.5h-1v0.94a1 1 0 0 1-0.030.24l-0.4 1.60.930.620.93-0.62-0.4-1.6a1 1 0 0 1-0.03-0.24"}],["path",{"d":"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m2.5 8.5v0.94l-0.4 1.6a1 1 0 0 0 0.42 1.07l0.930.62a1 1 0 0 0 1.11 0l0.93-0.62a1 1 0 0 0 0.42-1.07l-0.4-1.6V8.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1m1-5.5h-1v1h1v1h-1v1h1v1H9V6H8V5h1V4H8V3h1V2H8V1H6.5v1h1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
