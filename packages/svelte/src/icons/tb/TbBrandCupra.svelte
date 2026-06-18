<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.5 10l-2.5 -4l15.3 6.91a0.2 0.2 0 0 1 0.09 0.28l-3.39 5.81"}],["path",{"d":"M10 19l-3.39 -5.81a0.2 0.2 0 0 1 0.09 -0.28l15.3 -6.91l-2.5 4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
