<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m5.71 15.71 4.58 4.58c0.390.39 1.030.39 1.42 0 0.39-0.390.39-1.03 0-1.42L8.83 16H19c0.55 0 1-0.45 1-1V5c0-0.55-0.45-1-1-1s-1 0.45-1 1v9H8.83l2.88-2.87c0.39-0.390.39-1.03 0-1.42-0.39-0.39-1.03-0.39-1.42 0l-4.58 4.58c-0.390.39-0.39 1.03 0 1.42z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
