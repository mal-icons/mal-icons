<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m21.96 9.73-1.43-5a11 0 0 0-0.96-0.73H4.43c-0.45 0-0.840.3-0.960.73l-1.43 5c-0.180.630.3 1.270.96 1.27h2.2l-1.05 7.88a0.990.99 0 1 0 1.960.26L6.67 15h10.67l0.55 4.14a1 1 0 0 0 0.980.86c0.6 0 1.06-0.530.98-1.12L18.8 11H21c0.66 0 1.14-0.640.96-1.27zM6.93 13l0.27-2h9.6l0.27 2H6.93z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
