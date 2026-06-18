<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 13a2 2 0 1 1 4 0v4m-2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 1 1 4 0v2h8.04"}],["path",{"d":"M5 11v-5a3 3 0 0 1 0.13 -0.89m1.99 -1.98a3 3 0 0 1 0.88 -0.13h8a3 3 0 0 1 3 3v5"}],["path",{"d":"M6 19v2"}],["path",{"d":"M18 19v2"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
