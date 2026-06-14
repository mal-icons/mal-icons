<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2v8"}],["path",{"d":"m16 6-4 4-4-4"}],["rect",{"width":"20","height":"8","x":"2","y":"14","rx":"2"}],["path",{"d":"M6 18h0.01"}],["path",{"d":"M10 18h0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
