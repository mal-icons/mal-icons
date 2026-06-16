<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.73 14.23 7 1.5 3.11 5.39l8.13 11.67c-0.780.78-0.78 2.05 0 2.83l1.41 1.41c0.780.78 2.050.78 2.83 0l4.24-4.24c0.79-0.780.79-2.050.01-2.83zm-5.66 5.65-1.41-1.41 4.24-4.24 1.41 1.41-4.24 4.24z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
