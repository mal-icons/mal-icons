<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 18l0.01 0"}],["path",{"d":"M9.17 15.17a4 4 0 0 1 5.66 0"}],["path",{"d":"M6.34 12.34a8 8 0 0 1 11.31 0"}],["path",{"d":"M3.52 9.52c4.69 -4.69 12.28 -4.69 17 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
