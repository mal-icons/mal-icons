<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"}],["path",{"d":"M12 15l3.4 5.89l1.6 -3.23l3.6 0.23l-3.4 -5.89"}],["path",{"d":"M6.8 12l-3.4 5.89l3.6 -0.23l1.6 3.23l3.4 -5.89"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
