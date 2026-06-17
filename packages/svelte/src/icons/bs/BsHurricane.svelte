<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 2.6A5.5 5.5 0 0 1 15 7.5a0.50.5 0 0 0 1 0 6.5 6.5 0 1 0-13 0 5 5 0 0 0 6 4.9A5.5 5.5 0 0 1 1 7.5a0.50.5 0 0 0-1 0 6.5 6.5 0 1 0 13 0 5 5 0 0 0-6-4.9M10 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
