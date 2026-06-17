<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.59-2.290.29-0.080.380.450.08c0.290.070.350.180.290.47l-0.74 3.47c-0.190.90.11 1.320.81 1.320.55 0 1.18-0.25 1.47-0.6l0.09-0.42c-0.20.18-0.490.25-0.690.25-0.28 0-0.37-0.19-0.3-0.53zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
