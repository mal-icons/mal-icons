<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 6v12h-0.89c-3.34 0 -6.05 -2.69 -6.05 -6s2.71 -6 6.05 -6h0.89"}],["path",{"d":"M3.06 6v12h0.89c3.34 0 6.05 -2.69 6.05 -6s-2.71 -6 -6.05 -6h-0.89"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
