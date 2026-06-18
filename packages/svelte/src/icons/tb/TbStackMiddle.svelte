<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 10l4 -2l-8 -4l-8 4l4 2"}],["path",{"d":"M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2","fill":"currentColor"}],["path",{"d":"M8 14l-4 2l8 4l8 -4l-4 -2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
