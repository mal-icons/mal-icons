<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M10.01 6.02l1.98 -4.01l3.09 6.25l6.9 1l-4.42 4.3m0.01 4.01l0.59 3.43l-6.16 -3.24l-6.17 3.25l1.18 -6.87l-5 -4.87l6.33 -0.92"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
