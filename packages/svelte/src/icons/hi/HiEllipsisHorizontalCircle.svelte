<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M8.63 12a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0H8.25m4.13 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0H12m4.13 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0h-0.37M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
