<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 9h-2.55V6h-2.9v3H8l4 4zm3-6H4.99C3.88 3 3 3.9 3 5v14c0 1.10.88 2 1.99 2H19c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 16H5v-3h3.56c0.69 1.19 1.97 2 3.45 2s2.75-0.81 3.45-2H19v3zm0-5h-4.99c0 1.1-0.9 2-2 2s-2-0.9-2-2H5l-0.01-9H19v9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
