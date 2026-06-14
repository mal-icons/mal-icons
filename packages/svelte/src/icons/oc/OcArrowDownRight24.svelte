<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.25 8.5a0.750.75 0 0 1 0.750.75v9a0.750.75 0 0 1-0.750.75h-9a0.750.75 0 0 1 0-1.5h7.19L6.22 7.28a0.750.75 0 0 1 0.02-1.040.750.75 0 0 1 1.04-0.02L17.5 16.44V9.25a0.750.75 0 0 1 0.75-0.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
