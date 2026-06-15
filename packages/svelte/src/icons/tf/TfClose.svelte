<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.21 8.5l6.65 6.65-0.71 0.71-6.65-6.65-6.65 6.65-0.71-0.71 6.65-6.65-6.65-6.65 0.71-0.71 6.65 6.65 6.65-6.65 0.71 0.71-6.65 6.65z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
