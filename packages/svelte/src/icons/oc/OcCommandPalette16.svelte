<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m6.35 8.04-4.77 4.77a0.750.75 0 1 0 1.06 1.06L7.95 8.57a0.750.75 0 0 0 0-1.06L2.64 2.21a0.750.75 0 0 0-1.06 1.06L6.35 8.04ZM8.75 11.5a0.750.75 0 0 0 0 1.5h5.5a0.750.75 0 0 0 0-1.5h-5.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
