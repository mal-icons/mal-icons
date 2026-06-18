<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.01 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 21l3 -3l0.75 -1.5"}],["path",{"d":"M14 21v-4l-4 -3l0.5 -6"}],["path",{"d":"M5 12l1 -3l4.5 -1l3.5 3l4 -0.5"}],["path",{"d":"M18.01 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
