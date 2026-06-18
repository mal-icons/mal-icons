<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 7h8a1 1 0 0 1 1 1v7c0 0.27 -0.11 0.52 -0.28 0.7"}],["path",{"d":"M16 16h-11a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h2"}],["path",{"d":"M7 16v4"}],["path",{"d":"M7.5 16l4.24 -4.24"}],["path",{"d":"M13.75 9.76l2.76 -2.75"}],["path",{"d":"M13.5 16l1.25 -1.25"}],["path",{"d":"M16.74 12.76l3.26 -3.26"}],["path",{"d":"M4 13.5l4.75 -4.75"}],["path",{"d":"M17 17v3"}],["path",{"d":"M5 20h4"}],["path",{"d":"M15 20h4"}],["path",{"d":"M17 7v-2"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
