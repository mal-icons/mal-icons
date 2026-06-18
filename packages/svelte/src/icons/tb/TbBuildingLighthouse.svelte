<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 3l2 3l2 15h-8l2 -15l2 -3"}],["path",{"d":"M8 9l8 0"}],["path",{"d":"M3 11l2 -2l-2 -2"}],["path",{"d":"M21 11l-2 -2l2 -2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
