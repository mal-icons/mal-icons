<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.6 4.58c3.22 -1.18 7.03 -0.61 9.65 1.63c2.98 2.54 3.6 6.52 1.64 9.66m-1.91 2.11c-2.79 2.19 -6.89 2.67 -10.27 1.02l-4.7 1l1.3 -3.9c-2.23 -3.3 -1.49 -7.51 1.68 -10.06"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
