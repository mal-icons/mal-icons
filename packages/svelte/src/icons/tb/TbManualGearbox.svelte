<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 8l0 8"}],["path",{"d":"M12 8l0 8"}],["path",{"d":"M19 8v2a2 2 0 0 1 -2 2h-12"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
