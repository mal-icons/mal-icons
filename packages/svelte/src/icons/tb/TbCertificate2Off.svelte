<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 12a3 3 0 1 0 3 3"}],["path",{"d":"M11 7h3"}],["path",{"d":"M10 18v4l2 -1l2 1v-4"}],["path",{"d":"M10 19h-2a2 2 0 0 1 -2 -2v-11m1.18 -2.82c0.25 -0.11 0.53 -0.17 0.82 -0.17h8a2 2 0 0 1 2 2v9m-0.17 3.82a2 2 0 0 1 -1.82 1.18h-2"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
