<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 15l6 -6"}],["path",{"d":"M9 9.5a0.5 0.5 0 1 0 1 0a0.5 0.5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M14 14.5a0.5 0.5 0 1 0 1 0a0.5 0.5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -0.64l0.7 -0.7a2.2 2.2 0 0 1 3.12 0l0.7 0.7a2.2 2.2 0 0 0 1.55 0.64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 0.64 1.55l0.7 0.7a2.2 2.2 0 0 1 0 3.12l-0.7 0.7a2.2 2.2 0 0 0 -0.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 0.64l-0.7 0.7a2.2 2.2 0 0 1 -3.12 0l-0.7 -0.7a2.2 2.2 0 0 0 -1.55 -0.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -0.64 -1.55l-0.7 -0.7a2.2 2.2 0 0 1 0 -3.12l0.7 -0.7a2.2 2.2 0 0 0 0.64 -1.55v-1"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
