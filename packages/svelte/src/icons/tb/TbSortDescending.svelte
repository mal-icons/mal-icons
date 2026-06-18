<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 6l9 0"}],["path",{"d":"M4 12l7 0"}],["path",{"d":"M4 18l7 0"}],["path",{"d":"M15 15l3 3l3 -3"}],["path",{"d":"M18 6l0 12"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
