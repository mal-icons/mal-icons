<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1 13.5a0.50.5 0 0 0 0.50.5h3.8a0.50.5 0 0 0 0.44-0.26L11 3h3.5a0.50.5 0 0 0 0-1h-3.8a0.50.5 0 0 0-0.440.26L5 13H1.5a0.50.5 0 0 0-0.50.5m10 0a0.50.5 0 0 0 0.50.5h3a0.50.5 0 0 0 0-1h-3a0.50.5 0 0 0-0.50.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
