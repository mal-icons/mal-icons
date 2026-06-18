<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 19l2.5 -2.5"}],["path",{"d":"M18.5 14.5l1.5 -1.5"}],["path",{"d":"M3 3l18 18"}],["path",{"d":"M19 5h-7l-0.65 2.26"}],["path",{"d":"M10.45 10.43l-2.45 8.57l-3 -6h-2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
