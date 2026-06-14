<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m2 2 20 20"}],["path",{"d":"M4.93 4.93a10 10 0 0 0-1.94 11.41 2 2 0 0 1 0.09 1.17l-1.06 3.29a1 1 0 0 0 1.24 1.17l3.41-1a2 2 0 0 1 1.10.09 10 10 0 0 0 11.3-1.99"}],["path",{"d":"M8.35 2.69A10 10 0 0 1 21.3 15.65"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
