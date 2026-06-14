<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 9.17a3 3 0 1 0 0 5.66"}],["path",{"d":"M17 9.17a3 3 0 1 0 0 5.66"}],["rect",{"x":"2","y":"5","width":"20","height":"14","rx":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
