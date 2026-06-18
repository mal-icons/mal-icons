<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.7 5.31L12.950.25a1.89 1.89 0 0-1.89 0L2.3 5.31a1.89 1.89 0 0-0.94 1.64v10.11c0 0.680.36 1.30.95 1.64l8.76 5.06a1.89 1.89 0 1.89 0l8.76-5.05c0.59-0.340.95-0.960.95-1.64V6.95c0-0.67-0.36-1.3-0.94-1.64zm-7.45 7.75l-3.8 3.8-1.35-1.35 3.8-3.8-3.8-3.81 1.35-1.35 3.81 3.81 1.35 1.35-1.35 1.35z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
