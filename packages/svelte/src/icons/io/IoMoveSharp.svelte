<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polyline",{"points":"176 112 256 32 336 112","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["line",{"x1":"255.98","y1":"32","x2":"256","y2":"480","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["polyline",{"points":"176 400 256 480 336 400","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["polyline",{"points":"400 176 480 256 400 336","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["polyline",{"points":"112 176 32 256 112 336","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["line",{"x1":"32","y1":"256","x2":"480","y2":"256","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
