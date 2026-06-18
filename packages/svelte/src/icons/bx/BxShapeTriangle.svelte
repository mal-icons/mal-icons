<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 15c-0.18 0-0.360.02-0.530.05L8.95 6.53C8.98 6.36 9 6.18 9 6c0-1.65-1.35-3-3-3S3 4.35 3 6c0 1.30.84 2.4 2 2.82v6.37A3 3 0 0 0 3 18c0 1.65 1.35 3 3 3a2.99 2.99 0 0 0 2.82-2h6.37a2.99 2.99 0 0 0 2.82 2c1.65 0 3-1.35 3-3S19.65 15 18 15zm-11 0.18V8.82c0.33-0.120.63-0.290.89-0.51l7.8 7.8a2.96 2.96 0 0 0-0.510.89h-6.37A2.99 2.99 0 0 0 7 15.18zM6 5a1 1 0 1 1-1 1c0-0.550.45-1 1-1zm0 14a1 1 0 0 1 0-2 1 1 0 0 1 0 2zm12 0a1 1 0 0 1 0-2 1 1 0 0 1 0 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
