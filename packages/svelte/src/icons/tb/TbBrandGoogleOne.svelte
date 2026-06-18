<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 5v13.98a2 2 0 0 0 4 0v-13.98a2 2 0 1 0 -4 0"}],["path",{"d":"M6.63 8.41a2.13 2.13 0 0 0 -0.07 2.94c0.77 0.83 2.05 0.87 2.86 0.08l4.95 -4.83c0.81 -0.79 0.85 -2.11 0.08 -2.94a1.98 1.98 0 0 0 -2.86 -0.08l-4.95 4.84"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
