<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 3.62V12.13L11.5 15L6.08 13.03V14.98L3 10.97L11.96 11.67V4.01L15 3.62ZM12.02 4.05L6.99 1V3L2.38 4.36L1 6.13V10.16L2.98 11.03V5.87L12.02 4.05Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
