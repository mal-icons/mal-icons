<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.71 12.12c0.26-0.950.31-2.030.14-3.21l-0.87-6.06A1 1 0 0 0 18 2H6a1 1 0 0 0-0.990.86l-0.86 6.06c-0.17 1.18-0.12 2.260.14 3.210.86 3.13 3.55 5.39 6.71 5.79V20H9v2h6v-2h-2v-2.08c3.16-0.4 5.85-2.66 6.71-5.79zM17.13 4l0.57 4H6.3l0.57-4h10.27zM6.22 11.59c-0.13-0.47-0.18-1.01-0.16-1.59h11.89c0.020.58-0.03 1.12-0.16 1.59A6.02 6.02 0 0 1 12 16a6.02 6.02 0 0 1-5.78-4.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
