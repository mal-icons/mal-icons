<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 18h2a6 6 0 0 0 6 -6m0.88 -3.13a6 6 0 0 1 5.12 -2.87h2"}],["path",{"d":"M8 4h10a2 2 0 0 1 2 2v10m-0.59 3.41a2 2 0 0 1 -1.41 0.59h-12a2 2 0 0 1 -2 -2v-12c0 -0.55 0.22 -1.04 0.58 -1.4"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
