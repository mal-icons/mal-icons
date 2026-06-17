<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.94 6H5.06L5 8h0.5c0.18-1.10.36-1.19 1.69-1.24l0.29-0.01v5.09c0 0.47-0.10.58-0.90.66v0.5H9.41v-0.5c-0.8-0.07-0.9-0.18-0.9-0.65V6.76l0.30.01c1.340.04 1.510.14 1.69 1.24h0.5l-0.06-2z"}],["path",{"d":"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
