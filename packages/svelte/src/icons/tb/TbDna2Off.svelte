<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 3v1c-0.01 2.46 -0.91 4.55 -2.7 6.28m-2.29 1.72c-3.33 1.99 -5 4.66 -5.01 8.01v1"}],["path",{"d":"M17 21.01v-1c0 -1.44 -0.31 -2.75 -0.93 -3.94m-4.07 -4.07c-1.9 -1.14 -3.26 -2.48 -4.08 -4.07"}],["path",{"d":"M8 4h9"}],["path",{"d":"M7 20h10"}],["path",{"d":"M12 8h4"}],["path",{"d":"M8 16h8"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
