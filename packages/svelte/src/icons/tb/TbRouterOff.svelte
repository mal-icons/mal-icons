<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 13h2a2 2 0 0 1 2 2v2m-0.59 3.42c-0.36 0.36 -0.86 0.58 -1.41 0.58h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h8"}],["path",{"d":"M17 17v0.01"}],["path",{"d":"M13 17v0.01"}],["path",{"d":"M12.23 8.2a4 4 0 0 1 6.02 0.55"}],["path",{"d":"M9.45 5.41a8 8 0 0 1 12.06 1.09"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
