<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.5 3a5 5 0 0 1 4.91 4.03A3 3 0 0 1 13 13h-1.5a0.50.5 0 0 0 0-1H1.05a3.5 3.5 0 0 1-0.71-1H9.5a0.50.5 0 0 0 0-1H0.04a3.5 3.5 0 0 1 0-1H7.5a0.50.5 0 0 0 0-1H0.34a3.5 3.5 0 0 1 3.57-1.98A5 5 0 0 1 8.5 3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
