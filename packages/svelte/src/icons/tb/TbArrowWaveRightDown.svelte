<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 14h4v-4"}],["path",{"d":"M3 12c0.89 1.28 2.48 2.03 4 2c1.52 0.03 3.11 -0.72 4 -2s2.48 -2.03 4 -2c1.52 -0.03 3 1 4 2l2 2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
