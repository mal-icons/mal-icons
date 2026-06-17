<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 7v1.08c0.540.17 1 0.6 1 1.22v2.4c0 0.82-0.78 1.3-1.5 1.3h-3c-0.72 0-1.5-0.48-1.5-1.3V9.3c0-0.630.46-1.06 1-1.22V7a2 2 0 1 1 4 0M7 7v1h2V7a1 1 0 0 0-2 0"}],["path",{"d":"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
