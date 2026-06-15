<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M21.75 6.75a4.5 4.5 0 0 1-4.88 4.48c-1.08-0.09-2.260.07-2.950.9l-7.15 8.68a2.55 2.55 0 1 1-3.59-3.59l8.68-7.15c0.83-0.691-1.870.9-2.95a4.5 4.5 0 0 1 6.34-4.49l-3.28 3.28a3 3 0 0 0 2.25 2.25l3.28-3.28c0.260.560.4 1.190.4 1.85Z"}],["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M4.87 19.13h0.01v0.01h-0.01v-0.01Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
