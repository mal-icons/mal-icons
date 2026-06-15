<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M6.75 12a0.750.75 0 1 1-1.5 0 0.750.75 0 0 1 1.5 0ZM12.75 12a0.750.75 0 1 1-1.5 0 0.750.75 0 0 1 1.5 0ZM18.75 12a0.750.75 0 1 1-1.5 0 0.750.75 0 0 1 1.5 0Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
