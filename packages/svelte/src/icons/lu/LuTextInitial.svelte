<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 5h6"}],["path",{"d":"M15 12h6"}],["path",{"d":"M3 19h18"}],["path",{"d":"m3 12 3.55-7.72a0.50.5 0 0 1 0.89 0L11 12"}],["path",{"d":"M3.92 10h6.16"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
