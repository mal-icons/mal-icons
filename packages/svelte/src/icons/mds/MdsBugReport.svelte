<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 8h-2.81a5.99 5.99 0 0 0-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-0.960.06-1.410.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-0.050.33-0.090.66-0.09 1v1H4v2h2v1c0 0.340.040.670.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c0.05-0.330.09-0.660.09-1v-1h2v-2h-2v-1c0-0.34-0.04-0.67-0.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
