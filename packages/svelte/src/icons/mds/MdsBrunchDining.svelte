<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 8h2V4h-2v4zm-2 14H2v-2h14v2zm2-6.11-0.4-0.42a5.85 5.85 0 0 1-1.6-4V2h6v9.51c0 1.46-0.54 2.87-1.53 3.94l-0.470.52V20h2v2h-4v-6.11zM7 16v-2h4v2h5v2H2v-2h5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
