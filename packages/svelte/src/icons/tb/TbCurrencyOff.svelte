<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.53 14.52a7 7 0 0 0 -9.06 -9.05m-2.42 1.58a7 7 0 0 0 9.9 9.9"}],["path",{"d":"M4 4l3 3"}],["path",{"d":"M20 4l-3 3"}],["path",{"d":"M4 20l3 -3"}],["path",{"d":"M20 20l-3 -3"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
