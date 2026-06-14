<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m16 16-3 3 3 3"}],["path",{"d":"M3 12h14.5a1 1 0 0 1 0 7H13"}],["path",{"d":"M3 19h6"}],["path",{"d":"M3 5h18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
