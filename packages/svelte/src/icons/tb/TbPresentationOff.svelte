<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 4h1m4 0h13"}],["path",{"d":"M4 4v10a2 2 0 0 0 2 2h10m3.42 -0.59c0.36 -0.36 0.58 -0.86 0.58 -1.41v-10"}],["path",{"d":"M12 16v4"}],["path",{"d":"M9 20h6"}],["path",{"d":"M8 12l2 -2m4 0l2 -2"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
