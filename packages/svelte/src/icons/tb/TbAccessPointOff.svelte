<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M14.83 9.17a4 4 0 0 1 1.17 2.83"}],["path",{"d":"M17.66 6.34a8 8 0 0 1 1.64 8.95"}],["path",{"d":"M9.17 14.83a4 4 0 0 1 0 -5.66"}],["path",{"d":"M6.34 17.66a8 8 0 0 1 0 -11.31"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
