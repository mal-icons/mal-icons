<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 6v4.5c0 0.55-0.45 1-1 1h-9.67c-0.55 0-1-0.45-1-1V6c0-0.550.45-1 1-1H20c0.55 0 1 0.45 1 1zm-6.33 12v-4.5c0-0.55-0.45-1-1-1h-3.33c-0.55 0-1 0.45-1 1V18c0 0.550.45 1 1 1h3.33c0.55 0 1-0.45 1-1zm1-4.5V18c0 0.550.45 1 1 1H20c0.55 0 1-0.45 1-1v-4.5c0-0.55-0.45-1-1-1h-3.33c-0.56 0-1 0.45-1 1zM8.33 18V6c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h3.33c0.56 0 1-0.45 1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
