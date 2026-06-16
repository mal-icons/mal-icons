<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3.41c0-0.89-1.08-1.34-1.71-0.71l-6.6 6.6L21 17.61V3.41zm0.44 17.47L5.62 5.06a11 0 1 0-1.41 1.41l5.66 5.66-7.16 7.16c-0.630.63-0.19 1.710.7 1.71h15.32l1.29 1.29c0.390.39 1.020.39 1.41 0 0.4-0.390.4-1.020.01-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
