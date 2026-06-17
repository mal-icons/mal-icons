<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 0.5a0.50.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V0.5a0.50.5 0 0 0-1 0V1H4zm-2 4v-1c0-0.280.24-0.50.55-0.5h10.91c0.3 0 0.550.220.550.5v1c0 0.28-0.240.5-0.550.5H2.55C2.25 5 2 4.78 2 4.5m6 3.49c1.66-1.71 5.83 1.28 0 5.13-5.82-3.85-1.66-6.84 0-5.13"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
