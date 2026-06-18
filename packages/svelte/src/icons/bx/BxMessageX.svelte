<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h3v3.77L13.28 18H20c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 14h-7.28L9 18.23V16H4V4h16v12z"}],["path",{"d":"M9.71 13.71 12 11.41l2.29 2.29 1.41-1.41L13.41 10l2.29-2.29-1.41-1.41L12 8.59 9.71 6.29 8.29 7.71 10.59 10l-2.29 2.29z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
