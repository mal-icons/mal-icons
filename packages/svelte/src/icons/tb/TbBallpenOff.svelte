<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 6l7 7l-2 2"}],["path",{"d":"M10 10l-4.17 4.17a2.83 2.83 0 1 0 4 4l4.17 -4.17"}],["path",{"d":"M16 12l4.41 -4.41a2 2 0 0 0 0 -2.83l-1.17 -1.17a2 2 0 0 0 -2.83 0l-4.41 4.41"}],["path",{"d":"M4 20l1.77 -1.77"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
