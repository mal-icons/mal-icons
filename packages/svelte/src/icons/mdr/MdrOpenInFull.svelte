<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 8.59V4c0-0.55-0.45-1-1-1h-4.59c-0.89 0-1.34 1.08-0.71 1.71l1.59 1.59-10 10-1.59-1.59c-0.62-0.63-1.7-0.19-1.70.7V20c0 0.550.45 1 1 1h4.59c0.89 0 1.34-1.080.71-1.71L7.71 17.7l10-10 1.59 1.59c0.620.63 1.70.19 1.7-0.7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
