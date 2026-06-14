<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.5 12a1 1 0 1 1 0 9H9.01a7 7 0 1 1 6.7-9z"}],["path",{"d":"M21.83 9A3 3 0 0 0 19 7h-2.21a5.5 5.5 0 0 0-10.720.61"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
