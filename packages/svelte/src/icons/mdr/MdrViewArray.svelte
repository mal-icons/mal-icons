<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 5h-1c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1zm-4 0H8c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h8c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1zM5 5H4c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
