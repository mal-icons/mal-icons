<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.5 6.07l6.85 6.85-0.71 0.71-6.15-6.15-6.15 6.15-0.71-0.71 6.85-6.85zM8.5 2.64l6.15 6.15 0.71-0.71-6.85-6.85-6.85 6.85 0.71 0.71 6.15-6.15z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
