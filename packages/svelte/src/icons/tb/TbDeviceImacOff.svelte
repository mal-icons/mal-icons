<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 3h13a1 1 0 0 1 1 1v12c0 0.28 -0.11 0.53 -0.3 0.71m-3.7 0.29h-13a1 1 0 0 1 -1 -1v-12c0 -0.28 0.11 -0.53 0.29 -0.71"}],["path",{"d":"M3 13h10m4 0h4"}],["path",{"d":"M8 21h8"}],["path",{"d":"M10 17l-0.5 4"}],["path",{"d":"M14 17l0.5 4"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
