<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.260.01c-3.12-0.15-5.74 2.11-6.19 5.08-0.020.14-0.040.27-0.070.41-0.7 3.7-3.94 6.51-7.83 6.51-1.39 0-2.69-0.36-3.82-0.98a0.20.2 0 0 0-0.30.18V24H12v-9c0-1.66 1.34-3 2.99-3h2.99c3.38 0 6.1-2.82 5.97-6.24-0.12-3.08-2.61-5.6-5.68-5.75"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
