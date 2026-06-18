<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.9 2.01 3.9 12l3.09 3.09 2.71-2.7L20.09 2l-6.190.01zm0.82 14.6 5.39-5.38h-5.93c-0.11 0-0.26 0-0.340.07l-2.23 2.23-3.09 3.07 3.09 3.1 2.15 2.15c0.070.070.140.170.260.15h6.07z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
