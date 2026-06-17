<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.5 5.51a0.140.14 0 0 0-0.20.13V6.65a0.50.5 0 0 1-0.50.5H2.5v2.9h6.3a0.50.5 0 0 1 0.50.5v1c0 0.110.110.180.20.13l3.98-2.930.04-0.03a0.150.15 0 0 0 0-0.25l-0.04-0.03zM8.3 5.65a1.14 1.14 0 0 1 1.77-0.96l3.99 2.94a1.15 1.15 0 0 1 0 1.95l-3.99 2.94a1.14 1.14 0 0 1-1.77-0.96v-0.5H2a0.50.5 0 0 1-0.5-0.5v-3.9a0.50.5 0 0 1 0.5-0.5h6.3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
