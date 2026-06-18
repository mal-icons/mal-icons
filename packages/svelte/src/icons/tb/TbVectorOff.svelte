<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.68 6.73a1 1 0 0 1 -0.68 0.27h-2a1 1 0 0 1 -1 -1v-2c0 -0.28 0.11 -0.53 0.29 -0.71"}],["path",{"d":"M17 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M20.72 20.69a1 1 0 0 1 -0.72 0.31h-2a1 1 0 0 1 -1 -1v-2c0 -0.28 0.12 -0.54 0.3 -0.72"}],["path",{"d":"M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M5 7v10"}],["path",{"d":"M19 7v8"}],["path",{"d":"M9 5h8"}],["path",{"d":"M7 19h10"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
