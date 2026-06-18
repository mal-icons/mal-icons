<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 12v0.01"}],["path",{"d":"M9.17 9.17c-3.91 3.91 -5.8 8.34 -4.24 9.9c1.56 1.56 6 -0.34 9.9 -4.24m1.88 -2.11c2.59 -3.28 3.64 -6.5 2.36 -7.79c-1.28 -1.28 -4.51 -0.23 -7.78 2.36"}],["path",{"d":"M4.93 4.93c-1.56 1.56 0.34 6 4.24 9.9c3.91 3.91 8.34 5.8 9.9 4.24m-0.07 -4.07c-0.77 -1.79 -2.21 -3.87 -4.17 -5.83c-1.94 -1.94 -4.04 -3.4 -5.83 -4.17"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
