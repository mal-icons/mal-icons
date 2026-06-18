<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 2H8C4.69 2 2 4.69 2 8v13a1 1 0 0 0 1 1h13c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm-5 10.5A1.5 1.5 0 0 1 9.5 14c-0.09 0-0.17-0.01-0.25-0.02-0.080.01-0.160.03-0.250.03a2 2 0 1 1 2-2c0 0.09-0.010.17-0.020.250.010.080.030.160.030.25zm4 1.5c-0.09 0-0.17-0.01-0.25-0.02a1.47 1.47 0 0 1-0.250.03 1.5 1.5 0 0 1-1.5-1.5c0-0.080.01-0.170.03-0.25-0.01-0.08-0.02-0.16-0.02-0.25a2 2 0 1 1 2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
