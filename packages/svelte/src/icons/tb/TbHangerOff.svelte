<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 6a2 2 0 1 0 -4 0m6.51 6.51l3.46 1.92a2 2 0 0 1 1.03 1.75v0.82m-2 2h-14a2 2 0 0 1 -2 -2v-0.82a2 2 0 0 1 1.03 -1.75l6.67 -3.71"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
