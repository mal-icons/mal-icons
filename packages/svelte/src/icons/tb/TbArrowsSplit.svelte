<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 17h-8l-3.5 -5h-6.5"}],["path",{"d":"M21 7h-8l-3.49 5"}],["path",{"d":"M18 10l3 -3l-3 -3"}],["path",{"d":"M18 20l3 -3l-3 -3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
