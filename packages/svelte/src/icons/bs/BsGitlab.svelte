<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m15.73 6.1-0.02-0.06L13.530.36a0.570.57 0 0 0-0.56-0.360.60.6 0 0 0-0.330.120.60.6 0 0 0-0.190.29l-1.47 4.5H5.03l-1.47-4.5A0.570.57 0 0 0 2.470.36L0.29 6.04l-0.020.06A4.04 4.04 0 0 0 1.61 10.77l0.010.010.020.01 3.32 2.49 1.64 1.24 1 0.76a0.670.67 0 0 0 0.81 0l1-0.75 1.64-1.24 3.34-2.50.01-0.01a4.05 4.05 0 0 0 1.34-4.67Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
