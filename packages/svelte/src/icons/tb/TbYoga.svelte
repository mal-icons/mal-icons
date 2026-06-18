<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 20h4l1.5 -3"}],["path",{"d":"M17 20l-1 -5h-5l1 -7"}],["path",{"d":"M4 10l4 -1l4 -1l4 1.5l4 1.5"}],["path",{"d":"M10.01 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
