<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 20c0 0.55-0.45 1-1 1s-1-0.45-1-1v-3c-0.73-2.58-3.07-3.47-5.17-3l0.880.88a11 0 1 1-1.41 1.41L4.71 13.7a11 0 0 1 0-1.41L7.3 9.7a11 0 1 1 1.41 1.41l-0.880.89c1.51-0.33 3.730.08 5.17 1.36V6.83l-0.880.88a11 0 1 1-1.41-1.41l2.59-2.59a11 0 0 1 1.41 0L17.3 6.3a11 0 1 1-1.41 1.41L15 6.83V20z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
