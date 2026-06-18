<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"}],["path",{"d":"M6 8v11a1 1 0 0 0 1.81 0.59l3.69 -5.09v0.06"}],["path",{"d":"M6 8h15l-3.5 7l-7.1 -0.75a4 4 0 0 1 -3.3 -2.49l-2.85 -7.13a1 1 0 0 0 -0.93 -0.63h-1.32"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
