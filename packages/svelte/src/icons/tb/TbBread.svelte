<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 4a3 3 0 0 1 2 5.24v8.77a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-8.76a3 3 0 0 1 1.82 -5.23h12.18v0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
