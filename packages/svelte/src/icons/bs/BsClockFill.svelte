<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a0.50.5 0 0 0-1 0V9a0.50.5 0 0 0 0.250.43l3.5 2a0.50.5 0 0 0 0.5-0.87L8 8.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
