<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 6h3a6 6 0 0 1 6 6v3m-0.13 3.87a3 3 0 0 1 -2.87 2.13h-8a3 3 0 0 1 -3 -3v-6a5.99 5.99 0 0 1 2.29 -4.71"}],["path",{"d":"M10 6v-1a2 2 0 1 1 4 0v1"}],["path",{"d":"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
