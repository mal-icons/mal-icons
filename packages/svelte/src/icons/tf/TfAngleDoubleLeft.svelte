<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.99 8.5l6.15 6.15-0.71 0.71-6.85-6.85 6.85-6.85 0.71 0.71-6.15 6.15zM9.29 2.35l-0.71-0.71-6.85 6.85 6.85 6.85 0.71-0.71-6.15-6.15 6.15-6.15z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
