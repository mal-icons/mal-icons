<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m7.85 8.25 1.540.89M7.85 8.25a3 3 0 1 1-5.2-3 3 3 0 0 1 5.2 3Zm1.540.89a2.17 2.17 0 0 1 1.08 1.84c0.010.350.050.70.14 1.02M9.38 9.14l2.08 1.2M7.85 15.75l1.54-0.89m-1.540.89a3 3 0 1 1-5.2 3 3 3 0 0 1 5.2-3Zm1.54-0.89a2.17 2.17 0 0 0 1.08-1.84c0.01-0.350.05-0.690.14-1.02m-1.22 2.86 2.08-1.2m0-3.33a4.32 4.32 0 0 1 2.07-1.38l5.33-1.63a4.5 4.5 0 0 1 2.48-0.04l0.80.22-7.79 4.5m-2.88-1.66A4.33 4.33 0 0 0 10.61 12m3.74 0 7.79 4.5-0.80.22a4.5 4.5 0 0 1-2.48-0.04l-5.33-1.63a4.32 4.32 0 0 1-2.07-1.38M14.34 12l-2.88 1.66"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
