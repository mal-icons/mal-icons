<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 4h5.63l-3.61-4h-7.02v4h4v3.72h-1.12v9.28h3.25v-9.28h-1.12v-3.72zM5 1h5.57l1.81 2h-7.38v-2zM9.13 16h-1.25v-7.28h1.25v7.28z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
