<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 3h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2"}],["path",{"d":"M7 7h10"}],["path",{"d":"M12 3v7"}],["path",{"d":"M21 17.31c-2.97 -1.92 -15 -8.78 -15 -1.86c0 1.72 1.52 2.55 2.99 2.55c3.51 0 6.81 -5.42 6.81 -8h-6.6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
