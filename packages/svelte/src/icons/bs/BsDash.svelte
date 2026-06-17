<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 8a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0 1h-7A0.50.5 0 0 1 4 8"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
