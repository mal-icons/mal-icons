<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v18l4-4h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-3.29 11.54-1.41 1.41-3.29-3.29-3.29 3.29-1.41-1.41 3.29-3.29-3.29-3.29 1.41-1.41 3.29 3.29 3.29-3.29 1.41 1.41-3.29 3.29 3.29 3.29z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
