<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m2 8 2 2-2 2 2 2-2 2"}],["path",{"d":"m22 8-2 2 2 2-2 2 2 2"}],["rect",{"width":"8","height":"14","x":"8","y":"5","rx":"1"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
