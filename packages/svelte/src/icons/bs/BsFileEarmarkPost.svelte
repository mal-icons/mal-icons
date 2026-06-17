<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"}],["path",{"d":"M4 6.5a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0.50.5v7a0.50.5 0 0 1-0.50.5h-7a0.50.5 0 0 1-0.5-0.5zm0-3a0.50.5 0 0 1 0.5-0.5H7a0.50.5 0 0 1 0 1H4.5a0.50.5 0 0 1-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
