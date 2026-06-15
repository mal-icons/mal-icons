<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 0.9-2.7L5.74 5.1a3.38 3.38 0 0 1 2.7-1.35h7.13c1.06 0 2.060.5 2.7 1.35l2.59 3.45a4.5 4.5 0 0 1 0.9 2.7m0 0a3 3 0 0 1-3 3m0 3h0.01v0.01h-0.01v-0.01Zm0-6h0.01v0.01h-0.01v-0.01Zm-3 6h0.01v0.01h-0.01v-0.01Zm0-6h0.01v0.01h-0.01v-0.01Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
