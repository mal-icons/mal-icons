<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17.57 17.6a2 2 0 0 0 2.83 2.83"}],["path",{"d":"M11.11 11.13a3 3 0 1 0 3.77 3.72"}],["path",{"d":"M12 7v1"}],["path",{"d":"M6.7 17.8l2.8 -2"}],["path",{"d":"M17.3 17.8l-2.8 -2"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
