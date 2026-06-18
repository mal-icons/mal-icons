<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 11a1 1 0 1 1 -1 1.01a1 1 0 0 1 1 -1v-0.01"}],["path",{"d":"M21 11a1 1 0 1 1 -1 1.01a1 1 0 0 1 1 -1v-0.01"}],["path",{"d":"M8 12h8"}],["path",{"d":"M13 9l3 3l-3 3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
