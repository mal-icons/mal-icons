<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 0.9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5S9.83 13 9 13s-1.5-0.67-1.5-1.5zM15 17H9c-0.55 0-1-0.45-1-1s0.45-1 1-1h6c0.55 0 1 0.45 1 1s-0.45 1-1 1zm0-4c-0.83 0-1.5-0.67-1.5-1.5S14.17 10 15 10s1.50.67 1.5 1.5S15.83 13 15 13z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
