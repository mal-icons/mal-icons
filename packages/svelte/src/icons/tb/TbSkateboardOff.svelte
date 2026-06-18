<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 15a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2"}],["path",{"d":"M3 9c0 0.55 0.9 1 2 1h5m4 0h5c1.11 0 2 -0.45 2 -1"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
