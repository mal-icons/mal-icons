<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.5 5a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1M4 5a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1m2-0.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0"}],["path",{"d":"M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a0.50.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a0.50.5 0 0 1 0 1H2a2 2 0 0 1-2-2zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"}],["path",{"d":"M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-4.85-1.35a0.50.5 0 0 0 0 0.71l0.650.65-0.650.65a0.50.5 0 0 0 0.710.71l0.65-0.650.650.65a0.50.5 0 0 0 0.71-0.71l-0.65-0.650.65-0.65a0.50.5 0 0 0-0.71-0.71l-0.650.65-0.65-0.65a0.50.5 0 0 0-0.71 0"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
