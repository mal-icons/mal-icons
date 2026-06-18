<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 21h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2zM5 5h14l0 14H5V5z"}],["path",{"d":"m13.55 11.66-4-2-2.45 4.89 1.790.89 1.55-3.1 4 2 2.45-4.89-1.79-0.89z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
