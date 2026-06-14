<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.5 6.75a0.750.75 0 0 0-1.5 0V9H8.75a0.750.75 0 0 0 0 1.5H11v2.25a0.750.75 0 0 0 1.5 0V10.5h2.25a0.750.75 0 0 0 0-1.5H12.5V6.75ZM8.75 16a0.750.75 0 0 0 0 1.5h6a0.750.75 0 0 0 0-1.5h-6Z"}],["path",{"d":"M5 1h9.98a2 2 0 0 1 1.410.59l4.02 4.02A2 2 0 0 1 21 7.02V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2Zm-0.5 2v18a0.50.5 0 0 0 0.50.5h14a0.50.5 0 0 0 0.5-0.5V7.02a0.50.5 0 0 0-0.15-0.35l-4.02-4.02a0.50.5 0 0 0-0.35-0.15H5a0.50.5 0 0 0-0.50.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
