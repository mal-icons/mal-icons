<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.31 6.71a11 0 0 0 0 1.41L13.19 12l-3.88 3.88a11 0 1 0 1.41 1.41l4.59-4.59a11 0 0 0 0-1.41L10.72 6.7c-0.38-0.38-1.02-0.38-1.410.01z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
