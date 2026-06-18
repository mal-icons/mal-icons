<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.65 15.25c-1.82 1.76 -6.65 1.63 -6.65 1.63a18.26 18.26 0 0 1 -3.29 -0.26c1.13 1.99 4.12 2.81 8.98 2.48c-1.94 2.01 -13.6 5.26 -13.67 -7.64l-0.03 -1.15c0 -3.04 0.02 -4.11 1.35 -5.63c1.67 -1.91 6.65 -1.67 6.65 -1.67s4.98 -0.24 6.65 1.67c1.33 1.52 1.35 2.6 1.35 5.63s-0.46 4.07 -1.35 4.94"}],["path",{"d":"M12 11.2v-2.93c0 -1.26 -0.89 -2.28 -2 -2.28s-2 1.02 -2 2.28v4.72m4 -4.72c0 -1.26 0.9 -2.28 2 -2.28s2 1.02 2 2.28v4.72"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
