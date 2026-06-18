<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 12h10"}],["path",{"d":"M7 5v14"}],["path",{"d":"M17 5v14"}],["path",{"d":"M15 19h4"}],["path",{"d":"M15 5h4"}],["path",{"d":"M5 19h4"}],["path",{"d":"M5 5h4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
