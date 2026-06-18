<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.17 6.16l2.32 -2.32a2.88 2.88 0 0 1 4.07 0l3.6 3.6a2.88 2.88 0 0 1 0 4.07l-2.33 2.33"}],["path",{"d":"M14.93 14.95a2.86 2.86 0 0 1 -1.49 -0.79l-0.3 -0.3l-6.56 6.56a2 2 0 0 1 -1.24 0.58l-0.17 0.01h-1.17a1 1 0 0 1 -0.99 -0.88l-0.01 -0.12v-1.17a2 2 0 0 1 0.47 -1.28l0.12 -0.13l0.41 -0.41h2v-2h2v-2l2.14 -2.14l-0.3 -0.3a2.86 2.86 0 0 1 -0.79 -1.5"}],["path",{"d":"M15 9h0.01"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
