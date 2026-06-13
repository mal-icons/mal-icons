<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["ellipse",{"cx":"256","cy":"112","rx":"176","ry":"80","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}],["path",{"d":"M432 112C432 112 432 376.06 432 400C432 444.18 353.2 480 256 480C158.8 480 80 444.18 80 400C80 378.17 80 112 80 112","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}],["path",{"d":"M432 256C432 300.18 353.2 336 256 336C158.8 336 80 300.18 80 256","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
