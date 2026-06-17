<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.250.07a0.50.5 0 0 1 0.230.58L9.68 6.5H13a0.50.5 0 0 1 0.360.84l-8 8.5a0.50.5 0 0 1-0.84-0.49L6.32 9.5H3a0.50.5 0 0 1-0.36-0.84l8-8.5a0.50.5 0 0 1 0.62-0.09z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
