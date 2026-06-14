<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.47 10.78a0.750.75 0 0 0 1.06 0l3.75-3.75a0.750.75 0 1 0-1.06-1.06L8.75 8.44V1.75a0.750.75 0 0 0-1.5 0v6.69L4.78 5.97a0.750.75 0 1 0-1.06 1.06l3.75 3.75ZM3.75 13a0.750.75 0 0 0 0 1.5h8.5a0.750.75 0 0 0 0-1.5h-8.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
