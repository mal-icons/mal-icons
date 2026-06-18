<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.5 3h11c1.33 0 2.5 1 2.5 2.5c0 2 -1.7 3.26 -2 3.5l-4.5 4l2 -5h-9a2.5 2.5 0 0 1 0 -5"}],["path",{"d":"M17.5 21h-11c-1.32 0 -2.5 -1 -2.5 -2.5c0 -2 1.71 -3.26 2 -3.5l4.5 -4l-2 5h9a2.5 2.5 0 1 1 0 5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
