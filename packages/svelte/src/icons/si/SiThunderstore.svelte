<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m0.32 13.17 4.71 8.19L7.2 16.86 4.82 12.72a1.42 1.42 0 0 1 0-1.44l2.97-5.16c0.27-0.460.72-0.72 1.25-0.72h1.6l-3.09 6.95h3.81L6.17 22.4 16.58 9.91h-3.2l2.18-4.52h6.05L24 1.25H7.18c-0.86 0-1.60.43-2.03 1.17l-4.82 8.4a2.31 2.31 0 0 0 0 2.35m7.21 9.58h9.29a2.29 2.29 0 0 0 2.03-1.18l4.83-8.4a2.32 2.32 0 0 0 0-2.35l-1.93-3.36h-4.76l2.19 3.81c0.260.460.260.99 0 1.44l-2.96 5.16a1.41 1.41 0 0 1-1.250.72h-2.15l-1.5-0.02z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
