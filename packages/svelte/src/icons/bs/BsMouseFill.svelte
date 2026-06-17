<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0zm5.5-1.5a0.50.5 0 0 0-1 0v2a0.50.5 0 0 0 1 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
