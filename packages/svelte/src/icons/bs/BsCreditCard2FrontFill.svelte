<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h2a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm0 3a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0-1zm0 2a0.50.5 0 0 0 0 1h1a0.50.5 0 0 0 0-1zm3 0a0.50.5 0 0 0 0 1h1a0.50.5 0 0 0 0-1zm3 0a0.50.5 0 0 0 0 1h1a0.50.5 0 0 0 0-1zm3 0a0.50.5 0 0 0 0 1h1a0.50.5 0 0 0 0-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
