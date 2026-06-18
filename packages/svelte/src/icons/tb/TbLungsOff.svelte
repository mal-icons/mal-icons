<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.58 6.61c-1.21 1.06 -2.07 2.63 -2.93 5.45c-0.42 1.37 -0.64 2.96 -0.65 4.78c-0.01 1.68 1.26 3.05 2.88 3.16l0.2 0.01c1.61 0 2.92 -1.33 2.92 -2.98v-8.02"}],["path",{"d":"M15 11v-3.74c0 -0.69 0.55 -1.26 1.23 -1.26c0.2 0 0.41 0.05 0.58 0.15l0.13 0.08c1.46 1.06 2.43 2.65 3.41 5.82c0.42 1.37 0.64 2.96 0.65 4.78c0 0.06 0 0.13 0 0.19m-1.45 2.51c-0.42 0.27 -0.9 0.43 -1.42 0.46l-0.2 0.01c-1.61 0 -2.92 -1.33 -2.92 -2.98v-2.02"}],["path",{"d":"M9 12a2.99 2.99 0 0 0 2.13 -0.89"}],["path",{"d":"M12 4v4"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
