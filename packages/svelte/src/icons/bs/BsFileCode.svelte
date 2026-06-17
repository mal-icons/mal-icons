<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.65 5.65a0.50.5 0 1 1 0.710.71L5.71 8l1.65 1.65a0.50.5 0 0 1-0.710.71l-2-2a0.50.5 0 0 1 0-0.71zm2.71 0a0.50.5 0 1 0-0.710.71L10.29 8 8.65 9.65a0.50.5 0 0 0 0.710.71l2-2a0.50.5 0 0 0 0-0.71z"}],["path",{"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
