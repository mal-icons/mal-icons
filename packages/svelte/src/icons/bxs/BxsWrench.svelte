<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m21.51 6.11-3.89 3.89-3.53-3.54 3.89-3.89a6.5 6.5 0 0 0-8.48 8.49l-6.28 6.28a11 0 0 0 0 1.41l2.12 2.12a11 0 0 0 1.41 0l6.28-6.28a6.5 6.5 0 0 0 7.07-1.41 6.5 6.5 0 0 0 1.41-7.07z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
