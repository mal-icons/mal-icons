<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.05 12.81 6.56 4.32a11 0 0 0-1.41 0L2.32 7.15a11 0 0 0 0 1.41l8.49 8.49c0.390.39 1.020.39 1.41 0l2.83-2.83a11 0 0 0 0-1.41zm-0.71 4.95 3.53 3.53c0.390.39 1.030.39 1.42 0 0.39-0.390.39-1.03 0-1.42l-3.53-3.53-1.42 1.42z"}],["circle",{"cx":"18.5","cy":"5.5","r":"3.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
