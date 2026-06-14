<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.75 6a0.750.75 0 0 0 0 1.5h18.5a0.750.75 0 0 0 0-1.5H2.75ZM6 11.75a0.750.75 0 0 1 0.75-0.75h10.5a0.750.75 0 0 1 0 1.5H6.75a0.750.75 0 0 1-0.75-0.75Zm4 4.94a0.750.75 0 0 1 0.75-0.75h2.5a0.750.75 0 0 1 0 1.5h-2.5a0.750.75 0 0 1-0.75-0.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
