<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.5 5.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m5 6a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1M2 11a0.50.5 0 1 0 1 0 0.50.5 0 0 0-1 0m10.24-3.54a0.50.5 0 1 1-0.71-0.710.50.5 0 0 1 0.710.71m-8.49-0.71a0.50.5 0 1 0 0.710.710.50.5 0 0 0-0.71-0.71M8 7a4 4 0 0 0-4 4 0.50.5 0 0 0 0.50.5h7a0.50.5 0 0 0 0.5-0.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.96 2.5H5.04A3 3 0 0 1 8 8"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
