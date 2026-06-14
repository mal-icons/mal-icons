<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m0.43 1.93 1.22 1.22a8 8 0 1 1-1.6 5.690.750.75 0 1 1 1.49-0.15 6.5 6.5 0 1 0 1.18-4.46l1.36 1.36A0.250.25 0 0 1 3.9 6H0.25A0.250.25 0 0 1 0 5.75V2.1a0.250.25 0 0 1 0.43-0.18ZM7.75 4a0.750.75 0 0 1 0.750.75v2.99l2.030.81a0.750.75 0 0 1-0.56 1.39l-2.5-1A0.750.75 0 0 1 7 8.25v-3.5A0.750.75 0 0 1 7.75 4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
