<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.89 20h11.87c0.89 0 1.66 -0.66 1.85 -1.59l2.36 -12c0.21 -1.08 -0.44 -2.14 -1.46 -2.37a1.78 1.78 0 0 0 -0.38 -0.04h-11.87c-0.89 0 -1.66 0.67 -1.85 1.59l-2.36 12c-0.21 1.08 0.44 2.14 1.46 2.37c0.13 0.03 0.26 0.04 0.39 0.04"}],["path",{"d":"M9 8l4 4l-6 4"}],["path",{"d":"M12 16h3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
