<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 4a0.50.5 0 0 1 1 0v3.25l6.27-3.64c0.54-0.31 1.230.07 1.230.7v7.38c0 0.63-0.69 1.01-1.230.7L5 8.75V12a0.50.5 0 0 1-1 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
