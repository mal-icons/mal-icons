<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 12c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1 0.45-1 1zm15 6h-2V7.38L14 8.4V6.7L18.7 5h0.3v13z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
