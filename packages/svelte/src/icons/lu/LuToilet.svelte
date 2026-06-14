<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-0.6a0.50.5 0 0 0-0.420.77l1.54 2.47a0.50.5 0 0 1-0.420.77H5.4a0.50.5 0 0 1-0.42-0.76L7 18"}],["path",{"d":"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
