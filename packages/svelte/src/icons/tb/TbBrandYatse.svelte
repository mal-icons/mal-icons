<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 3l5 2.88v5.09l4.2 -2.73l4.8 2.73l-9.28 5.48l-2.38 1.41l-2.33 1.38l-3 1.77v-5.56l3 -1.77l0 -10.66"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
