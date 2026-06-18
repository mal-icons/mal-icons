<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 4h1a1 1 0 0 1 1 1v1m-0.29 3.7a1 1 0 0 1 -0.71 0.3h-4a1 1 0 0 1 -1 -1v-4c0 -0.28 0.11 -0.52 0.29 -0.71"}],["path",{"d":"M18 14h1a1 1 0 0 1 1 1v1m-0.29 3.7a1 1 0 0 1 -0.71 0.3h-4a1 1 0 0 1 -1 -1v-4c0 -0.28 0.11 -0.52 0.29 -0.71"}],["path",{"d":"M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M14 7h6"}],["path",{"d":"M17 4v6"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
