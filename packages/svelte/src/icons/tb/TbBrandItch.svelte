<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 7v1c0 1.09 1.08 2 2 2c1.11 0 2 -0.91 2 -2c0 1.09 0.89 2 2 2s2 -0.91 2 -2c0 1.09 0.89 2 2 2s2 -0.91 2 -2c0 1.09 0.89 2 2 2s2 -0.91 2 -2c0 1.09 0.89 2 2 2c0.92 0 2 -0.91 2 -2v-1c-0.01 -0.28 -0.54 -0.96 -1.59 -2.07a3 3 0 0 0 -2.17 -0.93h-12.48a3 3 0 0 0 -2.17 0.93c-1.05 1.1 -1.58 1.79 -1.59 2.07"}],["path",{"d":"M4 10c-0.12 6.28 0.15 9.77 0.81 10.46c1.53 0.37 4.36 0.54 7.19 0.54c2.83 0 5.65 -0.17 7.19 -0.54c0.99 -1.04 0.9 -9.56 0.81 -10.46"}],["path",{"d":"M10 16l2 -2l2 2"}],["path",{"d":"M12 14v4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
