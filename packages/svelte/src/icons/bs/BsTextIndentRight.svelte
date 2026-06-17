<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 3.5a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0 1h-11a0.50.5 0 0 1-0.5-0.5m10.65 2.15a0.50.5 0 0 1 0.710.71L11.71 8l1.65 1.65a0.50.5 0 0 1-0.710.71l-2-2a0.50.5 0 0 1 0-0.71zM2 6.5a0.50.5 0 0 1 0.5-0.5h6a0.50.5 0 0 1 0 1h-6a0.50.5 0 0 1-0.5-0.5m0 3a0.50.5 0 0 1 0.5-0.5h6a0.50.5 0 0 1 0 1h-6a0.50.5 0 0 1-0.5-0.5m0 3a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0 1h-11a0.50.5 0 0 1-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
