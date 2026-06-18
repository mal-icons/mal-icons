<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 17l5 1l0.75 -1.5"}],["path",{"d":"M14 21v-4l-4 -3l1 -6"}],["path",{"d":"M6 12v-3l5 -1l3 3l3 1"}],["path",{"d":"M18.01 19.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"}],["path",{"d":"M10.01 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
