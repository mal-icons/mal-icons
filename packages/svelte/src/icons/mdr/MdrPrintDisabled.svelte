<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.12 2.32A11 0 1 0 0.71 3.73L4.98 8A3 3 0 0 0 2 11v4c0 1.10.9 2 2 2h2v2c0 1.10.9 2 2 2h8c0.55 0 1.04-0.22 1.4-0.58l2.83 2.83a11 0 1 0 1.41-1.41L2.12 2.32zM15 19H9c-0.55 0-1-0.45-1-1v-4h2.98l4.72 4.72c-0.190.17-0.430.28-0.70.28zm4-11h-8.37l9 9H20c1.1 0 2-0.9 2-2v-4c0-1.66-1.34-3-3-3zm0 4c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm-2-5c0.55 0 1-0.45 1-1V4c0-0.55-0.45-1-1-1H7c-0.37 0-0.680.21-0.850.51L9.63 7H17z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
