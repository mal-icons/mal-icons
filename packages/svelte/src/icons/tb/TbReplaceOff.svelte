<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 3h1a1 1 0 0 1 1 1v1m-0.3 3.72a1 1 0 0 1 -0.7 0.28h-4a1 1 0 0 1 -1 -1v-4c0 -0.28 0.12 -0.53 0.3 -0.71"}],["path",{"d":"M19 15h1a1 1 0 0 1 1 1v1m-0.3 3.72a1 1 0 0 1 -0.7 0.28h-4a1 1 0 0 1 -1 -1v-4c0 -0.28 0.12 -0.53 0.3 -0.71"}],["path",{"d":"M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"}],["path",{"d":"M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
