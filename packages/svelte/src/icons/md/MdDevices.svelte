<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 6h18V4H4c-1.1 0-2 0.9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-0.55 0-1 0.45-1 1v10c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1zm-1 9h-4v-7h4v7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
