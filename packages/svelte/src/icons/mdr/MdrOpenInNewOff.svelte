<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m16.79 5.8-1.94-1.94a0.510.51 0 0 1 0.36-0.86h5.29c0.28 0 0.50.220.50.5v5.29c0 0.45-0.540.67-0.850.35L18.21 7.2l-4.09 4.09-1.41-1.41 4.08-4.08zM19 13v3.17l2 2V13c0-0.55-0.45-1-1-1s-1 0.45-1 1zm0.07 8.9-0.9-0.9H5a2 2 0 0 1-2-2V5.83l-0.9-0.9a11 0 1 1 1.41-1.41l16.97 16.97a11 0 1 1-1.41 1.41zm-2.9-2.9-4.88-4.88-0.880.88A11 0 1 1 9 13.59l0.88-0.88L5 7.83V19h11.17zM7.83 5H11c0.55 0 1-0.45 1-1s-0.45-1-1-1H5.83l2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
