<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 1h6v2H9zm3 5c3.87 0 7 3.13 7 7 0 0.94-0.19 1.83-0.52 2.65l1.5 1.5a8.96 8.96 0 0 0-0.95-9.76l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42 1.42a8.96 8.96 0 0 0-9.77-0.96l1.5 1.5A7.07 7.07 0 0 1 12 6z"}],["path",{"d":"m11 8.17 2 2V8h-2zM2.81 2.81 1.39 4.22l3.4 3.4a8.99 8.99 0 0 0 12.59 12.59l2.4 2.4 1.41-1.41L2.81 2.81zM12 20c-3.87 0-7-3.13-7-7 0-1.470.45-2.83 1.22-3.95l9.73 9.73A6.95 6.95 0 0 1 12 20z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
