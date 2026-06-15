<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M6.43 9.75 2.25 12l4.18 2.25m0-4.5 5.57 3 5.57-3m-11.14 0L2.25 7.5 12 2.25l9.75 5.25-4.18 2.25m0 0L21.75 12l-4.18 2.25m0 0 4.18 2.25L12 21.75 2.25 16.5l4.18-2.25m11.14 0-5.57 3-5.57-3"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
