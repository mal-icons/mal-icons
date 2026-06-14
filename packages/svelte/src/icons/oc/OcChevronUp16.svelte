<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.22 10.53a0.750.75 0 0 1 0-1.06l4.25-4.25a0.750.75 0 0 1 1.06 0l4.25 4.25a0.750.75 0 1 1-1.06 1.06L8 6.81 4.28 10.53a0.750.75 0 0 1-1.06 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
