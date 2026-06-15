<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.64 8.5l-6.85 6.85-0.71-0.71 6.15-6.15-6.15-6.15 0.71-0.71 6.85 6.85zM7.63 1.65l-0.71 0.71 6.15 6.15-6.15 6.15 0.71 0.71 6.85-6.85-6.85-6.85z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
