<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 10.5a0.50.5 0 0 0-0.5-0.5h-3a0.50.5 0 0 0 0 1h3a0.50.5 0 0 0 0.5-0.5m0-3a0.50.5 0 0 0-0.5-0.5h-7a0.50.5 0 0 0 0 1h7a0.50.5 0 0 0 0.5-0.5m0-3a0.50.5 0 0 0-0.5-0.5h-11a0.50.5 0 0 0 0 1h11a0.50.5 0 0 0 0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
