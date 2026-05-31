<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"x":"3","y":"3","width":"7","height":"7"}],["rect",{"x":"14","y":"3","width":"7","height":"7"}],["rect",{"x":"14","y":"14","width":"7","height":"7"}],["rect",{"x":"3","y":"14","width":"7","height":"7"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
