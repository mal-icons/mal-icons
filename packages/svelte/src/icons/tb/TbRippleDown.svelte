<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 7q 4.5 -3 9 0t 9 0"}],["path",{"d":"M3 17q 4.5 -3 9 0q 0.21 0.14 0.43 0.27"}],["path",{"d":"M3 12q 4.5 -3 9 0q 2.01 1.34 4.01 1.48"}],["path",{"d":"M19 16v6"}],["path",{"d":"M22 19l-3 3l-3 -3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
