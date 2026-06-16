<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 4c0-1.110.89-2 2-2s2 0.89 2 2-0.89 2-2 2-2-0.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0 0 18.06 7h-0.12a2 2 0 0 0-1.9 1.37l-0.86 2.58c1.080.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5S11 9.17 11 10s0.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-0.89 2-2s-0.89-2-2-2-2 0.89-2 2 0.89 2 2 2zm2 16v-7H9V9c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-0.82-0.68-1.5-1.5-1.5h-2c-0.82 0-1.50.68-1.5 1.5v4h1v4h3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
