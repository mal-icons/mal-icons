<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 0.5a0.50.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V0.5a0.50.5 0 0 0-1 0V1H4zM16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16zm-4.78-6.14a0.430.43 0 1 0 0-0.850.430.43 0 0 0-0.430.43c0 0.240.190.430.430.43m0.340.56h-0.67v4.11h0.67zm-6.87 4.11v-2.3h2.26v-0.61H4.68V7.8h2.46v-0.61H4v5.33zm3.3 0h0.68V9.98c0-0.550.23-1.010.95-1.010.13 0 0.2600.330.02v-0.61a2 2 0 0 0-0.25-0.02c-0.58 0-0.890.32-1.010.57h-0.02v-0.5H7.98z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
