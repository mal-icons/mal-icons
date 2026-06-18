<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M11.94 14c0 0.17 0.05 0.35 0.06 0.53l0 0.22a4.75 4.75 0 0 1 -4.53 4.75l-0.22 0m-4.75 -4.75a4.75 4.75 0 0 1 7.74 -3.69m6.51 8.44a4.75 4.75 0 0 1 -4.69 -5.5l-0.06 0m1.76 -2.94a4.75 4.75 0 0 1 7.73 3.48l0 0.22m-11.19 -3.81a4.75 4.75 0 0 1 -1.83 -7.62l0.16 -0.17m6.72 0a4.75 4.75 0 0 1 -1.66 7.8"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
