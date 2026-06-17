<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 6.21v9.04a0.750.75 0 0 0 1.5 0V10.5a0.50.5 0 0 1 1 0v4.75a0.750.75 0 0 0 1.5 0v-8.5a0.250.25 0 1 1 0.5 0v2.5a0.750.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.24a1 1 0 0 1-0.45-0.11l-0.33-0.16A0.830.83 0 0 1 5 2.49V0.75a0.750.75 0 0 0-1.5 0v2.08c0 0.720.4 1.37 1.04 1.69L5.5 5c0.320.320.50.750.5 1.21"}],["path",{"d":"M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
