<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 15l9 6l9 -6l-9 -6l-9 6"}],["path",{"d":"M3 9l9 6l9 -6l-9 -6l-9 6"}],["path",{"d":"M3 9l0 6"}],["path",{"d":"M21 9l0 6"}],["path",{"d":"M12 3l0 6"}],["path",{"d":"M12 15l0 6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
