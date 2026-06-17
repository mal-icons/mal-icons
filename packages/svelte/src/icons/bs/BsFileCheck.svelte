<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.85 6.15a0.50.5 0 0 1 0 0.71l-3 3a0.50.5 0 0 1-0.71 0l-1.5-1.5a0.50.5 0 1 1 0.71-0.71L7.5 8.79l2.65-2.65a0.50.5 0 0 1 0.71 0"}],["path",{"d":"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
