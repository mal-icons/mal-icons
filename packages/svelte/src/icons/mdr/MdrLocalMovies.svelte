<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 4v1h-2V4c0-0.55-0.45-1-1-1H9c-0.55 0-1 0.45-1 1v1H6V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v16c0 0.550.45 1 1 1s1-0.45 1-1v-1h2v1c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1v-1h2v1c0 0.550.45 1 1 1s1-0.45 1-1V4c0-0.55-0.45-1-1-1s-1 0.45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
