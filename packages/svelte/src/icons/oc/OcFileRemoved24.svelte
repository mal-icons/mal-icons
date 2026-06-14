<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3a2 2 0 0 1 2-2h9.98a2 2 0 0 1 1.410.59l4.02 4.02A2 2 0 0 1 21 7.02V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3Zm2-0.5a0.50.5 0 0 0-0.50.5v18a0.50.5 0 0 0 0.50.5h14a0.50.5 0 0 0 0.5-0.5V7.02a0.50.5 0 0 0-0.15-0.35l-4.02-4.02a0.50.5 0 0 0-0.35-0.15H5Z"}],["path",{"d":"M8 12c0-0.410.36-0.750.8-0.75h6.4c0.44 0 0.80.340.80.75s-0.360.75-0.80.75H8.8c-0.44 0-0.8-0.34-0.8-0.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
