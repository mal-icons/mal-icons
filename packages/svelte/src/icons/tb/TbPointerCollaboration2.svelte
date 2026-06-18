<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.99 13.94l1.96 5.02c0.56 1.45 2.63 1.37 3.09 -0.12l3.9 -12.73c0.38 -1.25 -0.79 -2.43 -2.04 -2.04l-12.73 3.9c-1.48 0.45 -1.56 2.52 -0.12 3.09l5.02 1.96c0.43 0.17 0.76 0.5 0.93 0.93"}],["path",{"d":"M9 20l-1.06 -3.15a1.25 1.25 0 0 0 -0.78 -0.78l-3.15 -1.06"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
