<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.12a3.38 3.38 0 1 1-6.75 0 3.38 3.38 0 0 1 6.75 0ZM3 19.24v-0.11a6.38 6.38 0 0 1 12.75 0v0.11A12.32 12.32 0 0 1 9.37 21c-2.33 0-4.51-0.64-6.37-1.77Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
