<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.7 10.72l-6.67 6.7a2.09 2.09 0 0 0 0 2.97a2.11 2.11 0 0 0 2.98 0l6.7 -6.68"}],["path",{"d":"M18.71 14.7l2 -2a1 1 0 0 0 0 -1.41l-7.59 -7.59a1 1 0 0 0 -1.41 0l-2 2"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
