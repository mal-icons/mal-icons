<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 10h6V4"}],["path",{"d":"m2 4 6 6"}],["path",{"d":"M21 10V7a2 2 0 0 0-2-2h-7"}],["path",{"d":"M3 14v2a2 2 0 0 0 2 2h3"}],["rect",{"x":"12","y":"14","width":"10","height":"7","rx":"1"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
