<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m1 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0"}],["path",{"d":"M2.5 15a0.50.5 0 0 1-0.5-0.5v-3.05a2.5 2.5 0 0 1 0-4.9V4.5a0.50.5 0 0 1 0.15-0.35l2-2A0.50.5 0 0 1 4.5 2h7a0.50.5 0 0 1 0.350.15l2 2A0.50.5 0 0 1 14 4.5v2.05a2.5 2.5 0 0 1 0 4.9v3.05a0.50.5 0 0 1-0.50.5zM8 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
