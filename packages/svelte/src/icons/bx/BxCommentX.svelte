<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.71 13.71 12 11.41l2.29 2.29 1.41-1.41L13.41 10l2.29-2.29-1.41-1.41L12 8.59 9.71 6.29 8.29 7.71 10.59 10l-2.29 2.29z"}],["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v18l5.33-4H20c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 14H6.67L4 18V4h16v12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
