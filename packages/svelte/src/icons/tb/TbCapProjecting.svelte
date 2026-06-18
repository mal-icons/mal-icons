<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 6h-13a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h13"}],["path",{"d":"M13 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}],["path",{"d":"M13 12h7"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
