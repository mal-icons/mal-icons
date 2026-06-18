<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.42 8.65a0.52 0.52 0 0 1 -0.4 -0.62l0.99 -4.62a0.52 0.52 0 0 1 0.63 -0.4l14.96 3.16c0.28 0.06 0.47 0.34 0.41 0.62l-0.99 4.62a0.52 0.52 0 0 1 -0.62 0.4l-4.34 -0.92c-0.2 -0.04 -0.31 0.02 -0.35 0.2l-2.03 9.49a0.53 0.53 0 0 1 -0.62 0.4l-4.64 -0.98a0.53 0.53 0 0 1 -0.41 -0.62l2.03 -9.49c0.04 -0.17 -0.03 -0.27 -0.2 -0.31l-4.38 -0.93"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
