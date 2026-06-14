<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 18h10"}],["path",{"d":"m17 21 3-3-3-3"}],["path",{"d":"M3 11h0.01"}],["rect",{"x":"15","y":"3","width":"5","height":"8","rx":"2.5"}],["rect",{"x":"6","y":"3","width":"5","height":"8","rx":"2.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
