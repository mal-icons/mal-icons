<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 17c3.33 -3.33 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.03 1.09 -2 3c0.03 2.05 1.66 4.88 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c0.33 2.67 1.33 4 3 4c0.53 0 2.64 -2 3 -2c0.52 0 1.52 0.67 3 2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
