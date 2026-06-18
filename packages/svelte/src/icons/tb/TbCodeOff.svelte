<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 8l-4 4l4 4"}],["path",{"d":"M17 8l4 4l-2.5 2.5"}],["path",{"d":"M14 4l-1.2 4.81m-0.8 3.21l-2 7.99"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
