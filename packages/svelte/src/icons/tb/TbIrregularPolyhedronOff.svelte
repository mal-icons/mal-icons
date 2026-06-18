<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.71 4.73a1 1 0 0 0 -0.46 1.14l1.75 6.13l-1.75 6.13a1 1 0 0 0 0.59 1.21l6.28 2.5a2.46 2.46 0 0 0 1.76 0l6.28 -2.5c0.04 -0.02 0.08 -0.04 0.12 -0.05m-0.47 -4.47l-0.8 -2.81l1.75 -6.13a1 1 0 0 0 -0.59 -1.2l-6.28 -2.5a2.46 2.46 0 0 0 -1.76 0l-3.54 1.41"}],["path",{"d":"M4.5 5.5c0.66 0.21 1.16 0.38 1.5 0.5m6 2c0.29 0 0.6 -0.06 0.88 -0.17l6.62 -2.33"}],["path",{"d":"M6 12l5.21 1.86a2.34 2.34 0 0 0 1.58 0l0.74 -0.26m2.96 -1.06c0.31 -0.11 0.82 -0.29 1.51 -0.54"}],["path",{"d":"M12 22v-10"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
