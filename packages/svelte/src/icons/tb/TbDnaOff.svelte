<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 12a3.9 3.9 0 0 0 -1.17 -2.83a4.03 4.03 0 0 0 -2.83 -1.17m-2.83 1.17a4 4 0 1 0 5.66 5.66"}],["path",{"d":"M9.17 20.49a4 4 0 1 0 -5.66 -5.66"}],["path",{"d":"M14.83 3.52a4 4 0 1 0 5.66 5.66"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
