<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M9.57 3H5.25A2.25 2.25 0 0 0 3 5.25v4.32c0 0.60.24 1.170.66 1.59l9.58 9.58c0.70.7 1.780.87 2.610.33a18.1 18.1 0 0 0 5.22-5.22c0.54-0.830.37-1.91-0.33-2.61L11.16 3.66A2.25 2.25 0 0 0 9.57 3Z"}],["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M6 6h0.01v0.01H6V6Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
