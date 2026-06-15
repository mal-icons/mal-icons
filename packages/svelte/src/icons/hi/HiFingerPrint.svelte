<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M7.86 4.24A7.5 7.5 0 0 1 19.5 10.5c0 2.92-0.56 5.71-1.57 8.27M5.74 6.36A7.47 7.47 0 0 0 4.5 10.5a7.46 7.46 0 0 1-1.15 3.99m1.99 3.56A11.21 11.21 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 0.53-0.02 1.05-0.06 1.57M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.63-4.6a18.67 18.67 0 0 1-2.48 5.33"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
