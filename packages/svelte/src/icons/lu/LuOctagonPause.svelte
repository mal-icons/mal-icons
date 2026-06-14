<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 15V9"}],["path",{"d":"M14 15V9"}],["path",{"d":"M2.59 16.73A2 2 0 0 1 2 15.31V8.69a2 2 0 0 1 0.59-1.41l4.69-4.69A2 2 0 0 1 8.69 2h6.62a2 2 0 0 1 1.410.59l4.69 4.69A2 2 0 0 1 22 8.69v6.62a2 2 0 0 1-0.59 1.41l-4.69 4.69a2 2 0 0 1-1.410.59H8.69a2 2 0 0 1-1.41-0.59z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
