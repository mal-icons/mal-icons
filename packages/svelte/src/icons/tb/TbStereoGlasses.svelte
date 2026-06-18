<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 3h-2l-3 9"}],["path",{"d":"M16 3h2l3 9"}],["path",{"d":"M3 12v7a1 1 0 0 0 1 1h4.59a1 1 0 0 0 0.71 -0.29l2 -2a1 1 0 0 1 1.41 0l2 2a1 1 0 0 0 0.71 0.29h4.59a1 1 0 0 0 1 -1v-7h-18"}],["path",{"d":"M7 16h1"}],["path",{"d":"M16 16h1"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
