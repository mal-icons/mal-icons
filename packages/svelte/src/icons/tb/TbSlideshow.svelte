<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 6l0.01 0"}],["path",{"d":"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8"}],["path",{"d":"M3 13l4 -4a3 5 0 0 1 3 0l4 4"}],["path",{"d":"M13 12l2 -2a3 5 0 0 1 3 0l3 3"}],["path",{"d":"M8 21l0.01 0"}],["path",{"d":"M12 21l0.01 0"}],["path",{"d":"M16 21l0.01 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
