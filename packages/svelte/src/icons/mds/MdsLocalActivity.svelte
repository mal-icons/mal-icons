<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 12c0-1.10.9-2 2-2V4H2.01v6c1.1 0 1.990.9 1.99 2s-0.89 2-2 2v6h20v-6c-1.1 0-2-0.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-0.25L12 5.8l1.54 3.95 4.240.25-3.29 2.69 1.09 4.11z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
