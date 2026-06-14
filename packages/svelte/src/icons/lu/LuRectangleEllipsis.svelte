<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"width":"20","height":"12","x":"2","y":"6","rx":"2"}],["path",{"d":"M12 12h0.01"}],["path",{"d":"M17 12h0.01"}],["path",{"d":"M7 12h0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
