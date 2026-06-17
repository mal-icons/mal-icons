<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.97 2.51a0.50.5 0 0 0-0.16-0.56l-0.18-0.13a5 5 0 0 0-2.08-0.78C6.220.86 4.5 1.23 2.84 3.13H1.79a0.50.5 0 0 0-0.350.15L0.15 4.57a0.50.5 0 0 0 0 0.71l2.57 2.58a0.50.5 0 0 0 0.71 0l1.29-1.29a0.50.5 0 0 0 0.15-0.35V5.57l8.39 8.87A0.50.5 0 0 0 14 14.5l1.5-1.5a0.50.5 0 0 0 0.02-0.69l-9.13-8.63c0.75-0.46 1.77-0.84 3.11-0.84a0.50.5 0 0 0 0.47-0.33"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
