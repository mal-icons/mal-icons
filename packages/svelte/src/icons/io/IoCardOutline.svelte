<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"x":"48","y":"96","width":"416","height":"320","rx":"56","ry":"56","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"48","y1":"192","x2":"464","y2":"192","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"60"}],["rect",{"x":"128","y":"300","width":"48","height":"20","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"60"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
