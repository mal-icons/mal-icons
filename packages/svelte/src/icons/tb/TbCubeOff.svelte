<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.83 16.81c0.11 -0.25 0.17 -0.52 0.17 -0.8v-8.02a1.98 1.98 0 0 0 -1 -1.72l-7 -4.01a2.02 2.02 0 0 0 -2 0l-3.01 1.73m-2.55 1.46l-1.44 0.83c-0.62 0.36 -1 1.01 -1 1.72v8.02c0 0.71 0.38 1.36 1 1.72l7 4.01a2.02 2.02 0 0 0 2 0l5.54 -3.17"}],["path",{"d":"M12 22v-10"}],["path",{"d":"M14.53 10.54l6.2 -3.58"}],["path",{"d":"M3.27 6.96l8.73 5.04"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
