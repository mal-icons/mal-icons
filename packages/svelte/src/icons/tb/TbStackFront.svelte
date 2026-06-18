<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4l-8 4l8 4l8 -4l-8 -4","fill":"currentColor"}],["path",{"d":"M8 14l-4 2l8 4l8 -4l-4 -2"}],["path",{"d":"M8 10l-4 2l8 4l8 -4l-4 -2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
