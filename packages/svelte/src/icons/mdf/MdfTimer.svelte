<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 1h6v2H9zm10.03 6.39 1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42 1.42A8.96 8.96 0 0 0 12 4a9 9 0 0 0-9 9c0 4.97 4.02 9 9 9a8.99 8.99 0 0 0 7.03-14.61zM13 14h-2V8h2v6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
