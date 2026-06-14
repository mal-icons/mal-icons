<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 11.31c1.170.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.90.5 2.5 1"}],["path",{"d":"M11.75 18c0.350.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.90.5 2.5 1"}],["path",{"d":"M2 10h4"}],["path",{"d":"M2 14h4"}],["path",{"d":"M2 18h4"}],["path",{"d":"M2 6h4"}],["path",{"d":"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
