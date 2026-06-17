<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m4.22 4.05a0.50.5 0 0 0-0.580.09l-3.71 4.71-2.66-2.77a0.50.5 0 0 0-0.630.06L0 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
