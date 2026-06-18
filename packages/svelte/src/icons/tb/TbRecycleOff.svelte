<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 17l-2 2l2 2m-2 -2h9m1.9 -2.07a2 2 0 0 0 -0.15 -0.68l-0.55 -1"}],["path",{"d":"M8.54 11l-0.73 -2.73l-2.73 0.73m2.73 -0.73l-4.5 7.79a2 2 0 0 0 1.51 2.89l1.14 0.02"}],["path",{"d":"M15.46 11l2.73 0.73l0.73 -2.73m-0.73 2.73l-4.5 -7.79a2 2 0 0 0 -3.26 -0.14l-0.59 0.98"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
