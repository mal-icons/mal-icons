<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.02-0.01H0V15.66c0 1.410.96 2.57 2.25 2.91L24 24.01V5.99c0.02-3.31-2.67-6-5.98-6zm3 15.67H18V8.79c0-0.67-0.22-2.23-2.21-2.23-1.32 0-2.280.91-2.28 2.23V15.66h-3.02V8.79c0-0.67-0.21-2.23-2.19-2.23-1.35 0-2.280.91-2.28 2.23V15.66H3V3.61h5.3c1.59 0 2.90.63 3.74 1.660.89-1.03 2.21-1.66 3.74-1.66 3.29 0 5.23 2.18 5.23 5.25l0.02 6.81z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
