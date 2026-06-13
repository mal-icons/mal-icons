<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["line",{"x1":"256","y1":"112","x2":"256","y2":"400","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"400","y1":"256","x2":"112","y2":"256","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
