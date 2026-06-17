<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"}],["path",{"d":"M9.5 2c-0.9 0-1.750.22-2.50.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 0.50.5 0 0 1 1 0 5.5 5.5 0 0 0 8 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 0.50.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2M8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
