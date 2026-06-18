<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2l-8 4l8 4l8 -4l-8 -4"}],["path",{"d":"M4 10l8 4l8 -4"}],["path",{"d":"M4 18l8 4l8 -4"}],["path",{"d":"M4 14l8 4l8 -4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
