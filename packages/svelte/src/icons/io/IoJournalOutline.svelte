<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"x":"96","y":"48","width":"320","height":"416","rx":"48","ry":"48","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"320","y1":"48","x2":"320","y2":"464","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"60"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
