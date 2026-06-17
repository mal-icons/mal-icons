<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 5a0.50.5 0 0 1 0.50.5v3.79l1.15-1.15a0.50.5 0 0 1 0.710.71l-2 2a0.50.5 0 0 1-0.71 0l-2-2a0.50.5 0 1 1 0.71-0.71L7.5 9.29V5.5A0.50.5 0 0 1 8 5"}],["path",{"d":"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
