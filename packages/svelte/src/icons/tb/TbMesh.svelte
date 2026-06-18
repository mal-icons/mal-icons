<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 9h18"}],["path",{"d":"M3 15h18"}],["path",{"d":"M8 4c0.49 0.45 3.5 3.31 3.5 8c0 0.66 -0.07 4.85 -3.5 8"}],["path",{"d":"M15 4a17 17 0 0 1 2 8c0 1.51 -0.2 4.63 -2 8"}],["path",{"d":"M18.78 20h-13.56a2.22 2.22 0 0 1 -2.22 -2.22v-11.56c0 -1.23 1 -2.22 2.22 -2.22h13.56c1.23 0 2.22 1 2.22 2.22v11.56a2.22 2.22 0 0 1 -2.22 2.22"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
