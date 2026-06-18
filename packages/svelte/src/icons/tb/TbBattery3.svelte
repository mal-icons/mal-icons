<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 7h11a2 2 0 0 1 2 2v0.5a0.5 0.5 0 0 0 0.5 0.5a0.5 0.5 0 0 1 0.5 0.5v3a0.5 0.5 0 0 1 -0.5 0.5a0.5 0.5 0 0 0 -0.5 0.5v0.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2"}],["path",{"d":"M7 10l0 4"}],["path",{"d":"M10 10l0 4"}],["path",{"d":"M13 10l0 4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
