<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.22 3.22a0.750.75 0 0 1 1.06 0l4.25 4.25a0.750.75 0 0 1 0 1.06l-4.25 4.25a0.750.75 0 0 1-1.04-0.020.750.75 0 0 1-0.02-1.04L9.94 8 6.22 4.28a0.750.75 0 0 1 0-1.06Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
