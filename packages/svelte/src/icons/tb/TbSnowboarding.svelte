<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M7 19l4 -2.5l-0.5 -1.5"}],["path",{"d":"M16 21l-1 -6l-4.5 -3l3.5 -6"}],["path",{"d":"M7 9l1.5 -3h5.5l2 4l3 1"}],["path",{"d":"M3 17c0.4 1.15 0.9 1.81 1.5 1.95c6 1.46 10.77 2.26 13.5 2.93c1.33 0.33 2.33 0 3 -0.98"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
