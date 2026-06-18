<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 17h8c1.11 0 2 -0.89 2 -2v-0.5c0 -0.28 0.22 -0.5 0.5 -0.5s0.5 -0.22 0.5 -0.5v-3c0 -0.28 -0.22 -0.5 -0.5 -0.5s-0.5 -0.22 -0.5 -0.5v-0.5c0 -1.1 -0.89 -2 -2 -2h-11c-1.1 0 -2 0.9 -2 2v3"}],["path",{"d":"M5 16v3"}],["path",{"d":"M5 22v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
