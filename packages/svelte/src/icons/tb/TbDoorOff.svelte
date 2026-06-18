<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 21h18"}],["path",{"d":"M6 21v-15"}],["path",{"d":"M7.18 3.18c0.25 -0.11 0.53 -0.17 0.82 -0.17h8a2 2 0 0 1 2 2v9"}],["path",{"d":"M18 18v3"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
