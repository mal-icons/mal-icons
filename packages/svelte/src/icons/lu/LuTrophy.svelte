<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 14.66v1.63a2 2 0 0 1-0.98 1.7A5 5 0 0 0 7 21.98"}],["path",{"d":"M14 14.66v1.63a2 2 0 0 0 0.98 1.7A5 5 0 0 1 17 21.98"}],["path",{"d":"M18 9h1.5a1 1 0 0 0 0-5H18"}],["path",{"d":"M4 22h16"}],["path",{"d":"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"}],["path",{"d":"M6 9H4.5a1 1 0 0 1 0-5H6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
