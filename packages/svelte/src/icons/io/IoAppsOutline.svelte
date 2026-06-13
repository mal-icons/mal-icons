<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"x":"64","y":"64","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"216","y":"64","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"368","y":"64","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"64","y":"216","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"216","y":"216","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"368","y":"216","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"64","y":"368","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"216","y":"368","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"368","y":"368","width":"80","height":"80","rx":"40","ry":"40","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
