<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.72 5.72a0.750.75 0 0 1 1.06 0L12 10.94l5.22-5.22a0.750.75 0 0 1 1.270.330.750.75 0 0 1-0.210.73L13.06 12l5.22 5.22a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21L12 13.06l-5.22 5.22a0.750.75 0 0 1-1.04-0.020.750.75 0 0 1-0.02-1.04L10.94 12 5.72 6.78a0.750.75 0 0 1 0-1.06Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
