<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.71 8.54c-0.39-0.39-1.02-0.39-1.41 0-1.26 1.26-3.32 1.26-4.59 0-2.04-2.04-5.37-2.04-7.41 0-0.390.39-0.39 1.02 0 1.41s1.020.39 1.41 0c0.37-0.370.82-0.62 1.29-0.78v7.83c0 0.550.45 1 1 1s1-0.45 1-1v-7.83c0.470.150.920.4 1.290.780.770.77 1.72 1.25 2.71 1.44v5.61c0 0.550.45 1 1 1s1-0.45 1-1v-5.61c0.99-0.19 1.94-0.67 2.71-1.440.39-0.390.39-1.02 0-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
