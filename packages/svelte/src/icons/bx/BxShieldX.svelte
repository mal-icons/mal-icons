<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m20.48 6.11-8-4a1 1 0 0 0-0.89 0l-8 4a1 1 0 0 0-0.550.8c-0.010.11-0.96 10.77 8.59 15.01a0.990.99 0 0 0 0.81 0c9.55-4.25 8.6-14.91 8.59-15.01a1 1 0 0 0-0.55-0.79zm-8.45 13.79C5.27 16.63 4.94 9.64 5 7.64l7.03-3.52 7.03 3.52c0.04 1.99-0.33 9.02-7.03 12.26z"}],["path",{"d":"M14.29 8.29 12 10.59 9.71 8.29 8.29 9.71 10.59 12l-2.29 2.29 1.41 1.41L12 13.41l2.29 2.29 1.41-1.41L13.41 12l2.29-2.29z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
