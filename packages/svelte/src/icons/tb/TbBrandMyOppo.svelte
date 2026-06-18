<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.32 5h-12.63l-3.42 4.02a1.09 1.09 0 0 0 0.02 1.45l9.71 10.53l9.72 -10.49a1.09 1.09 0 0 0 0.02 -1.44l-3.42 -4.07"}],["path",{"d":"M9 11l3 3l3 -3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
