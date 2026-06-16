<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 10.43V3c0-0.55-0.45-1-1-1H8c-0.55 0-1 0.45-1 1v7.43c0 0.350.180.680.490.86l4.18 2.51-0.99 2.34-2.220.19c-0.460.04-0.640.59-0.30.88l1.69 1.46-0.51 2.18c-0.10.430.370.770.750.54L12 20.23l1.91 1.15c0.380.230.85-0.110.75-0.54l-0.51-2.18 1.69-1.46c0.33-0.290.16-0.84-0.29-0.88l-2.22-0.19-0.99-2.34 4.18-2.51c0.3-0.170.48-0.490.48-0.85zm-4 1.8-1 0.6-1-0.6V3h2v9.23z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
