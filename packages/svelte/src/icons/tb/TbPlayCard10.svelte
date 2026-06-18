<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"}],["path",{"d":"M8 6h0.01"}],["path",{"d":"M16 18h0.01"}],["path",{"d":"M9 9v6"}],["path",{"d":"M12 13c0 1.11 0.67 2 1.5 2s1.5 -0.89 1.5 -2v-2c0 -1.1 -0.67 -2 -1.5 -2s-1.5 0.9 -1.5 2l0 2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
