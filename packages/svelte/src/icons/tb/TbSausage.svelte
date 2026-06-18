<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.5 5.5a2.5 2.5 0 0 0 -2.5 2.5c0 7.18 5.82 13 13 13a2.5 2.5 0 1 0 0 -5a8 8 0 0 1 -8 -8a2.5 2.5 0 0 0 -2.5 -2.5"}],["path",{"d":"M5.2 5.52l-1.24 -1.99a1 1 0 0 1 0.85 -1.53h1.39a1 1 0 0 1 0.85 1.53l-1.25 1.99"}],["path",{"d":"M18.48 18.23l1.99 -1.24a1 1 0 0 1 1.53 0.85v1.39a1 1 0 0 1 -1.53 0.85l-1.99 -1.25"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
