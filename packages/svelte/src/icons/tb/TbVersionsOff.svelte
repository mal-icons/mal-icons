<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.18 6.16a2 2 0 0 1 1.82 -1.16h6a2 2 0 0 1 2 2v9m-1.18 2.83a1.99 1.99 0 0 1 -0.81 0.17h-6a2 2 0 0 1 -2 -2v-7"}],["path",{"d":"M7 7v10"}],["path",{"d":"M4 8v8"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
