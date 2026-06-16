<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12 17.27 4.15 2.51c0.760.46 1.69-0.22 1.49-1.08l-1.1-4.72 3.67-3.18c0.67-0.580.31-1.68-0.57-1.75l-4.83-0.41-1.89-4.46c-0.34-0.81-1.5-0.81-1.84 0L9.19 8.63l-4.830.41c-0.880.07-1.24 1.17-0.57 1.75l3.67 3.18-1.1 4.72c-0.20.860.73 1.54 1.49 1.08l4.15-2.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
