<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.29 20.98c-0.82 0.13 -1.72 -0.3 -1.96 -1.29a1.72 1.72 0 0 0 -2.57 -1.07c-1.54 0.94 -3.31 -0.83 -2.37 -2.37a1.72 1.72 0 0 0 -1.06 -2.57c-1.76 -0.43 -1.76 -2.92 0 -3.35a1.72 1.72 0 0 0 1.07 -2.57c-0.94 -1.54 0.83 -3.31 2.37 -2.37c1 0.61 2.3 0.07 2.57 -1.06c0.43 -1.76 2.92 -1.76 3.35 0a1.72 1.72 0 0 0 2.57 1.07c1.54 -0.94 3.31 0.83 2.37 2.37a1.72 1.72 0 0 0 1.07 2.57c0.98 0.24 1.42 1.13 1.3 1.94"}],["path",{"d":"M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M17 21l4 -4"}],["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
