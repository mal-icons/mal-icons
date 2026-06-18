<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 10l0 6"}],["path",{"d":"M20 10l0 6"}],["path",{"d":"M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0"}],["path",{"d":"M8 3l1 2"}],["path",{"d":"M16 3l-1 2"}],["path",{"d":"M9 18l0 3"}],["path",{"d":"M15 18l0 3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
