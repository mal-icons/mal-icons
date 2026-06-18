<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.62 11.47l4.69 3.7-3.1-7.66zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.8 17.31c-0.010.47-0.40.84-0.870.83-0.24 0-0.42-0.09-0.66-0.29l-6.19-5-2.08 5.2H6.19L11.44 5.44c0.12-0.310.43-0.520.76-0.510.33-0.010.630.190.740.51l4.77 11.49c0.050.110.080.230.080.3500.0100.0100.02z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
