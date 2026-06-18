<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 12h0.01"}],["path",{"d":"M4 6h0.01"}],["path",{"d":"M4 18h0.01"}],["path",{"d":"M8 18h2"}],["path",{"d":"M8 12h2"}],["path",{"d":"M8 6h2"}],["path",{"d":"M14 6h6"}],["path",{"d":"M14 12h6"}],["path",{"d":"M14 18h6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
