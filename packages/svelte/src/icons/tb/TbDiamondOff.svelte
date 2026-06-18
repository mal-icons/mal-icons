<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 5h9l3 5l-3.31 3.7m-1.88 2.1l-3.31 3.7a0.7 0.7 0 0 1 -1 0l-8.5 -9.5l2.62 -4.37"}],["path",{"d":"M10 12l-2 -2.2l0.6 -1"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
