<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 0a2 2 0 0 0-2 2v12.79a0.50.5 0 0 0 0.850.35l2.85-2.85A1 1 0 0 1 4.41 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 3.99c1.66-1.71 5.83 1.28 0 5.13-5.82-3.85-1.66-6.84 0-5.13"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
