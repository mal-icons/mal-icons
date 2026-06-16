<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8c0-0.55-0.45-1-1-1H9c-0.55 0-1 0.45-1 1v8c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1s-0.45-1-1-1h-5v-2h5c0.55 0 1-0.45 1-1s-0.45-1-1-1h-5V9h5c0.55 0 1-0.45 1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
