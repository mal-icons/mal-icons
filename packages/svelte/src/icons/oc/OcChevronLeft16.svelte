<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.78 12.78a0.750.75 0 0 1-1.06 0L4.47 8.53a0.750.75 0 0 1 0-1.06l4.25-4.25a0.750.75 0 0 1 1.040.020.750.75 0 0 1 0.02 1.04L6.06 8l3.72 3.72a0.750.75 0 0 1 0 1.06Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
