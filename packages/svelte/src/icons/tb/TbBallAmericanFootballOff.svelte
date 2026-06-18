<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 9l-1 1m-2 2l-3 3"}],["path",{"d":"M10 12l2 2"}],["path",{"d":"M8 21a5 5 0 0 0 -5 -5"}],["path",{"d":"M6.81 6.8a12.96 12.96 0 0 0 -3.81 9.2a5 5 0 0 0 5 5a12.96 12.96 0 0 0 9.19 -3.8m1.79 -2.23a12.94 12.94 0 0 0 2.03 -6.97a5 5 0 0 0 -5 -5a12.94 12.94 0 0 0 -6.97 2.02"}],["path",{"d":"M16 3a5 5 0 0 0 5 5"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
