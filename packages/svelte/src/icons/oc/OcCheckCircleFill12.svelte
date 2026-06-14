<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0Zm-0.7 8.74L9.63 4.4 8.39 3.17 5.3 6.26l-1.7-1.7L2.36 5.8l2.94 2.94Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 12 12" {nodes} {...props} />
