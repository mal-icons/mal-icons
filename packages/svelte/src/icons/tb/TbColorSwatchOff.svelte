<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 13v4a4 4 0 0 0 6.83 2.83m1.17 -2.82v-12a2 2 0 0 0 -2 -2h-4a2 2 0 0 0 -2 2v4"}],["path",{"d":"M13 7.35l-2 -2a2 2 0 0 0 -2.11 -0.46m-2.13 1.87l-1.42 1.42a2 2 0 0 0 0 2.83l9 9"}],["path",{"d":"M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"}],["path",{"d":"M17 17v0.01"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
