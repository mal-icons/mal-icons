<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 18h4"}],["path",{"d":"M3 8a9 9 0 0 1 9 9v1l1.43 -4.28a12 12 0 0 1 6.02 -6.94l0.55 -0.28"}],["path",{"d":"M15 6h5v5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
