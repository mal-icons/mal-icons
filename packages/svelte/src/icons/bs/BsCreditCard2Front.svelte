<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"}],["path",{"d":"M2 5.5a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-2a0.50.5 0 0 1-0.5-0.5zm0 3a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0 1h-5a0.50.5 0 0 1-0.5-0.5m0 2a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0 1h-1a0.50.5 0 0 1-0.5-0.5m3 0a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0 1h-1a0.50.5 0 0 1-0.5-0.5m3 0a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0 1h-1a0.50.5 0 0 1-0.5-0.5m3 0a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0 1h-1a0.50.5 0 0 1-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
