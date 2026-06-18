<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.76 13.2l-0.98 -0.98l3.11 -2.09a1.2 1.2 0 0 0 -0.31 -2.23l-13.58 -3.9l3.9 13.56a1.2 1.2 0 0 0 2.23 0.31l2.09 -3.09l0.67 0.67"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
