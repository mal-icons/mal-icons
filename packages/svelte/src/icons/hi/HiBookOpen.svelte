<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M12 6.04A8.97 8.97 0 0 0 6 3.75c-1.05 0-2.060.18-3 0.51v14.25A8.99 8.99 0 0 1 6 18c2.31 0 4.410.87 6 2.29m0-14.25a8.97 8.97 0 0 1 6-2.29c1.05 0 2.060.18 3 0.51v14.25A8.99 8.99 0 0 0 18 18a8.97 8.97 0 0 0-6 2.29m0-14.25v14.25"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
