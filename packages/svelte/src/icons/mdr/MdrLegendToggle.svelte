<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 15H5c-0.55 0-1-0.45-1-1s0.45-1 1-1h14c0.55 0 1 0.45 1 1s-0.45 1-1 1zm0 2H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1zm-4-6 4.58-3.25c0.26-0.190.42-0.490.42-0.81 0-0.81-0.92-1.29-1.58-0.82L15 8.55 10 5 4.48 8.36c-0.30.19-0.480.51-0.480.86 0 0.780.85 1.26 1.520.85l4.4-2.68L15 11z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
