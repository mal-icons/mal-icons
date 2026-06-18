<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 12h4"}],["path",{"d":"M18 12h4"}],["path",{"d":"M18 5v14"}],["path",{"d":"M14 9v6"}],["path",{"d":"M10 5v14"}],["path",{"d":"M6 9v6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
