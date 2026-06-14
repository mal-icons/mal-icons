<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"width":"14","height":"6","x":"5","y":"14","rx":"2"}],["rect",{"width":"10","height":"6","x":"7","y":"4","rx":"2"}],["path",{"d":"M2 14h20"}],["path",{"d":"M2 4h20"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
