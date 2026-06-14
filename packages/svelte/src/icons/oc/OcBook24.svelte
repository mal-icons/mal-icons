<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 3.75A0.750.75 0 0 1 0.75 3h7.5c1.57 0 2.950.8 3.75 2.01A4.5 4.5 0 0 1 15.75 3h7.5a0.750.75 0 0 1 0.750.75v15.06a0.750.75 0 0 1-0.750.75l-7.68-0.05a3 3 0 0 0-2.140.88l-0.890.89a0.750.75 0 0 1-1.06 0l-0.9-0.9a3 3 0 0 0-2.12-0.88H0.75a0.750.75 0 0 1-0.75-0.75Zm12.75 15.23a4.5 4.5 0 0 1 2.82-0.97l6.930.05V4.5h-6.75a3 3 0 0 0-3 3ZM11.25 7.5a3 3 0 0 0-3-3H1.5V18h6.95c1.02 0 2.010.35 2.80.98Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
