<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 2h-17v4h1v11h15v-11h1v-4zM15 16h-13v-10h13v10zM16 5h-15v-2h15v2zM6 11h5.02c1.1 0 2-0.9 2-2s-0.9-2-2-2h-5.02c-1.1 0-2 0.9-2 2s0.9 2 2 2zM6 8h5.02c0.55 0 1 0.45 1 1s-0.45 1-1 1h-5.02c-0.55 0-1-0.45-1-1s0.45-1 1-1z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
