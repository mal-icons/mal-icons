<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 5l3 3l-2 1l4 4l-3 1l4 4h-9"}],["path",{"d":"M15 21l0 -3"}],["path",{"d":"M8 13l-2 -2"}],["path",{"d":"M8 12l2 -2"}],["path",{"d":"M8 21v-13"}],["path",{"d":"M5.82 16a3 3 0 0 1 -2.74 -3.69a3 3 0 0 1 0.3 -4.83a3 3 0 0 1 4.62 -3.71a3 3 0 0 1 4.61 3.71a3 3 0 0 1 0.31 4.83a3 3 0 0 1 -2.92 3.7h-4l-0.18 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
