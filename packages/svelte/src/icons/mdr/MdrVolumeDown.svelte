<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05c1.48-0.73 2.5-2.25 2.5-4.02zM5 10v4c0 0.550.45 1 1 1h3l3.29 3.29c0.630.63 1.710.18 1.71-0.71V6.41c0-0.89-1.08-1.34-1.71-0.71L9 9H6c-0.55 0-1 0.45-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
