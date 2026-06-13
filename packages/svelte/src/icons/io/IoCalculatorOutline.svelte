<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"x":"112","y":"48","width":"288","height":"416","rx":"32","ry":"32","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"160.01","y":"112","width":"191.99","height":"64","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["circle",{"cx":"168","cy":"248","r":"24"}],["circle",{"cx":"256","cy":"248","r":"24"}],["circle",{"cx":"344","cy":"248","r":"24"}],["circle",{"cx":"168","cy":"328","r":"24"}],["circle",{"cx":"256","cy":"328","r":"24"}],["circle",{"cx":"168","cy":"408","r":"24"}],["circle",{"cx":"256","cy":"408","r":"24"}],["rect",{"x":"320","y":"304","width":"48","height":"128","rx":"24","ry":"24"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
