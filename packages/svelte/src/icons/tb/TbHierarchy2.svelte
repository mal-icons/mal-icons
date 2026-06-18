<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 3h4v4h-4l0 -4"}],["path",{"d":"M3 17h4v4h-4l0 -4"}],["path",{"d":"M17 17h4v4h-4l0 -4"}],["path",{"d":"M7 17l5 -4l5 4"}],["path",{"d":"M12 7l0 6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
