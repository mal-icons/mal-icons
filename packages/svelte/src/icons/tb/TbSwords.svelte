<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11l5 0"}],["path",{"d":"M5 13l6 6"}],["path",{"d":"M14.32 17.32l3.68 3.68l3 -3l-3.36 -3.36"}],["path",{"d":"M10 5.5l-2 -2.5h-5v5l3 2.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
