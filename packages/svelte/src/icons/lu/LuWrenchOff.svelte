<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.75 5.09a6 6 0 0 1 6.84-2.88c0.440.120.540.660.220.98L14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.11-3.1c0.32-0.320.86-0.220.980.22a6 6 0 0 1-2.88 6.84"}],["path",{"d":"m13.5 13.5-7.88 7.88a1 1 0 0 1-3-3l7.88-7.88"}],["path",{"d":"m2 2 20 20"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
