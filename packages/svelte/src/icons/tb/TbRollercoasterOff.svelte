<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 21a5.55 5.55 0 0 0 5.27 -3.79l0.74 -2.2a8.76 8.76 0 0 1 2.35 -3.65m2.4 -1.59a8.76 8.76 0 0 1 3.57 -0.76h3.68"}],["path",{"d":"M20 9v7m0 4v1"}],["path",{"d":"M8 21v-3"}],["path",{"d":"M12 21v-9"}],["path",{"d":"M16 9.5v2.5m0 4v5"}],["path",{"d":"M15 3h5v3h-5l0 -3"}],["path",{"d":"M9.45 5.42l0.55 -0.41l2 2.5l-0.28 0.21m-2.27 1.7l-1.45 1.09l-1.8 -0.5l-0.2 -2l1.14 -0.85"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
