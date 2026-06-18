<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M21 13c0 -0.62 -0.23 -1.23 -0.71 -1.7l-7.71 -7.71c-0.37 -0.37 -0.88 -0.59 -1.41 -0.59h-5.17c-1.66 0 -3 1.34 -3 3v5.17c0 0.53 0.21 1.04 0.59 1.41l7.71 7.71c0.47 0.47 1.09 0.71 1.7 0.71"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
