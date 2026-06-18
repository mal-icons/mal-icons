<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 17l-2 2l2 2"}],["path",{"d":"M10 19h9a2 2 0 0 0 1.75 -2.75l-0.55 -1"}],["path",{"d":"M8.54 11l-0.73 -2.73l-2.73 0.73"}],["path",{"d":"M7.8 8.27l-4.5 7.79a2 2 0 0 0 1.51 2.89l1.14 0.02"}],["path",{"d":"M15.46 11l2.73 0.73l0.73 -2.73"}],["path",{"d":"M18.2 11.73l-4.5 -7.79a2 2 0 0 0 -3.26 -0.14l-0.59 0.98"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
