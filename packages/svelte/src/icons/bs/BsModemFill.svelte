<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 0a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 1.4 1.5c-0.350.31-0.870.68-1.63 1.06A0.50.5 0 0 0 5.5 16h5a0.50.5 0 0 0 0.22-0.95c-0.76-0.38-1.28-0.75-1.63-1.06A1.5 1.5 0 0 0 10.5 12.5v-11A1.5 1.5 0 0 0 9 0zm1 3a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1m0 2a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1m0.5 1.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0M8 9a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
