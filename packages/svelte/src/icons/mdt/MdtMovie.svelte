<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 10H5.76L4 6.47V18h16z","opacity":".3"}],["path",{"d":"M2.01 6 2 18c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.990.9-1.99 2zM4 6.47 5.76 10H20v8H4V6.47z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
