<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.5 4a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1m2-0.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m1 0.5a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1"}],["path",{"d":"M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h6.5v8H2a1 1 0 0 1-1-1m7.5 1V6H15v7a1 1 0 0 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
