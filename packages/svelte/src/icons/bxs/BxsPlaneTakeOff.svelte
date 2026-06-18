<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 18h18v2H3zm18.51-9.47a1.61 1.61 0 0 0-2.04-1.02L15 9 7 6 5 7l6 4-4 2-4-2-1 1 4 4 14.55-5.45a1.61 1.61 0 0 0 0.96-2.02z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
