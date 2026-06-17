<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 2.5A0.50.5 0 0 1 0.5 2H2a0.50.5 0 0 1 0.490.38L2.89 4H14.5a0.50.5 0 0 1 0.490.62l-1.5 6A0.50.5 0 0 1 13 11H4a0.50.5 0 0 1-0.48-0.38L1.61 3H0.5a0.50.5 0 0 1-0.5-0.5M3.14 5l0.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l0.5-2zm1.11 3H12v2h0.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l0.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
