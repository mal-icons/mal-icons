<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 15c0-4.62-3.51-8.44-8-8.94V4h-2v2.06c-4.490.5-8 4.32-8 8.94v2h18v-2zM2 18h20v2H2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
