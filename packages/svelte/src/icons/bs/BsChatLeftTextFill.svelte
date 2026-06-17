<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.41a1 1 0 0 0-0.710.29L0.85 15.15A0.50.5 0 0 1 0 14.79zm3.5 1a0.50.5 0 0 0 0 1h9a0.50.5 0 0 0 0-1zm0 2.5a0.50.5 0 0 0 0 1h9a0.50.5 0 0 0 0-1zm0 2.5a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
