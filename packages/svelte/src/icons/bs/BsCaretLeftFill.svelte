<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m3.86 8.75 5.48 4.8c0.650.57 1.660.11 1.66-0.75V3.2a1 1 0 0 0-1.66-0.75l-5.48 4.8a1 1 0 0 0 0 1.51z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
