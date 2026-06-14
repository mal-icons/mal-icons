<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1 12C1 5.93 5.93 1 12 1s11 4.93 11 11-4.92 11-11 11S1 18.08 1 12Zm16.28-2.72a0.750.75 0 0 0-0.02-1.040.750.75 0 0 0-1.04-0.02l-5.97 5.97-2.47-2.47a0.750.75 0 0 0-1.040.020.750.75 0 0 0-0.02 1.04l3 3a0.750.75 0 0 0 1.06 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
