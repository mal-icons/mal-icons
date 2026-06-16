<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.9 11a5 5 0 1 0 0 2h4.27l-0.880.88a11 0 1 0 1.41 1.41l2.59-2.59a11 0 0 0 0-1.41L18.7 8.7a11 0 1 0-1.41 1.41l0.880.89H13.9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
