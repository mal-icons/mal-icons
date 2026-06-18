<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 0v24h24V0zm13.52 6.75a0.750.75 0 0 1 0.70.99l-3 9a0.750.75 0 0 1-0.710.510.750.75 0 0 1-0.71-0.99l3-9a0.750.75 0 0 1 0.73-0.51zm-4.50a0.750.75 0 0 1 0.70.99l-3 9A0.750.75 0 0 1 6 17.25a0.750.75 0 0 1-0.71-0.99l3-9a0.750.75 0 0 1 0.73-0.51zm9 0a0.750.75 0 0 1 0.70.99l-3 9a0.750.75 0 0 1-0.710.510.750.75 0 0 1-0.71-0.99l3-9a0.750.75 0 0 1 0.73-0.51z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
