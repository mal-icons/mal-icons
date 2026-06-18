<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0.48 7.53v12.13A2.02 2.02 0 0 0 2.5 21.68h2.39l1.32 2.09a0.480.48 0 0 0 0.40.220.480.48 0 0 0 0.44-0.22l1.32-2.09h6.98l1.32 2.09a0.480.48 0 0 0 0.440.22c0.18 0 0.33-0.070.4-0.22l1.32-2.09h2.65a2.02 2.02 0 0 0 2.02-2.02V7.53a2.02 2.02 0 0 0-2.02-1.98h-7.68l4.45-4.45L17.16 0l-5.15 5.15L6.8 0 5.7 1.1l4.41 4.41H2.54a2.02 2.02 0 0 0-2.06 2.06z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
