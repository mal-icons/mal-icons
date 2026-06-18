<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 8v-2c0 -0.56 0.23 -1.06 0.6 -1.42"}],["path",{"d":"M4 16v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M16 20h2c0.56 0 1.06 -0.23 1.43 -0.6"}],["path",{"d":"M12 12.5l0.31 -0.19m2.46 -1.54l1.23 -0.77"}],["path",{"d":"M9.23 9.24l-1.23 0.77l4 2.5v4.5l3.08 -1.92m0.92 -3.08v-2l-4 -2.5l-0.3 0.19"}],["path",{"d":"M8 10v4.5l4 2.5"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
