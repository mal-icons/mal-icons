<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M15.86 15.9a3 3 0 0 0 4.26 4.22m0.58 -3.42a3.01 3.01 0 0 0 -1.51 -1.45"}],["path",{"d":"M8.7 10.7l1.34 -0.69m2.62 -1.35l2.64 -1.36"}],["path",{"d":"M8.7 13.3l6.6 3.4"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
