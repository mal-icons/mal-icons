<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.41 16.42c0.36 -0.36 0.59 -0.86 0.59 -1.42v-4a2 2 0 0 0 -2 -2h-6m-4 0h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"}],["path",{"d":"M17 9v-4a2 2 0 0 0 -2 -2h-6c-0.55 0 -1.05 0.22 -1.41 0.58m-0.59 3.42v2"}],["path",{"d":"M17 17v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h4"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
