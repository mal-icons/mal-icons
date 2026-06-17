<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m0 11a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m5-5a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1m-11 0a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1m9.74-4.04a0.50.5 0 1 1-0.71-0.710.50.5 0 0 1 0.710.71m-7.78 7.78a0.50.5 0 1 1-0.71-0.710.50.5 0 0 1 0.710.71m7.07 0a0.50.5 0 1 1 0.71-0.710.50.5 0 0 1-0.710.71M3.76 4.46a0.50.5 0 1 1 0.71-0.710.50.5 0 0 1-0.710.71"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
