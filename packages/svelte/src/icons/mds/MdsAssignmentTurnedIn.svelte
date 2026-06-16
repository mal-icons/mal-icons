<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.40.84-2.82 2H3v18h18V3zm-9 0c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zm-2 14-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
