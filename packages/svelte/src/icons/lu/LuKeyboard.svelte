<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 8h0.01"}],["path",{"d":"M12 12h0.01"}],["path",{"d":"M14 8h0.01"}],["path",{"d":"M16 12h0.01"}],["path",{"d":"M18 8h0.01"}],["path",{"d":"M6 8h0.01"}],["path",{"d":"M7 16h10"}],["path",{"d":"M8 12h0.01"}],["rect",{"width":"20","height":"16","x":"2","y":"4","rx":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
